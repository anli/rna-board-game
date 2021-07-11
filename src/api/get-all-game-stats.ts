import axios from 'axios';

type GameStatApi = {
  table_id: string;
  game_name: string;
  start: string;
  player_names: string;
  ranks: string;
};

type GameStat = {
  id: string;
  gameName: string;
  startDate: Date;
  players: string[];
  winners: string[];
  playerCount: number;
};

const fetchGameStats = async (
  playerId: string,
  page: number,
): Promise<GameStat[]> => {
  const url = 'https://boardgamearena.com/gamestats/gamestats/getGames.html';
  try {
    const {
      data: {data},
    } = await axios.get<{data: {tables: GameStatApi[]} | undefined}>(url, {
      params: {
        player: playerId,
        opponent_id: 0,
        finished: 1,
        updateStats: 0,
        page,
      },
    });

    if (data?.tables) {
      return data.tables.map(table => {
        const players = table.player_names.split(',');
        const winnerIndex = table.ranks.split(',').lastIndexOf('1');
        const winners = players.slice(0, winnerIndex + 1);
        return {
          ...table,
          id: table.table_id,
          gameName: table.game_name,
          startDate: new Date(Number(table.start) * 1000),
          players,
          winners,
          playerCount: players.length,
        };
      });
    }

    throw new Error('UNDEFINED RESPONSE');
  } catch (err) {
    throw err;
  }
};

const getAllGameStats = async ({
  page,
  stats,
  latestTableId,
  playerId,
}: {
  page: number;
  stats: GameStat[];
  latestTableId?: string;
  playerId: string;
}): Promise<GameStat[]> => {
  const nextPage = page + 1;

  try {
    const nextPageResult = await fetchGameStats(playerId, nextPage);
    const isEndOfPage = !nextPageResult || nextPageResult?.length === 0;
    if (isEndOfPage) {
      return stats;
    }

    const tableIdResultIndex = nextPageResult.findIndex(
      ({id}) => id === latestTableId,
    );
    const hasLatestTableId = tableIdResultIndex >= 0;
    if (hasLatestTableId) {
      return [
        ...stats,
        nextPageResult.slice(0, tableIdResultIndex),
      ] as GameStat[];
    }

    return await getAllGameStats({
      page: nextPage,
      stats: [...stats, ...nextPageResult],
      latestTableId,
      playerId,
    });
  } catch (err) {
    throw err;
  }
};

export const getGameStatsByPlayerId = (playerId: string) =>
  getAllGameStats({page: 0, stats: [], playerId});
