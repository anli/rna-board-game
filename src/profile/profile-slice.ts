import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type ProfileState = {
  playerId: string;
  playerName: string;
};

const initialState: ProfileState = {
  playerId: '',
  playerName: '',
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    set: (
      state,
      {
        payload: {playerId, playerName},
      }: PayloadAction<Pick<ProfileState, 'playerId' | 'playerName'>>,
    ) => {
      state.playerId = playerId;
      state.playerName = playerName;
    },
  },
});

export const profileSelectors = {
  profile: (state: {profile: ProfileState}) => state.profile,
};
