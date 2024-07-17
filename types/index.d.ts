declare global {
  
  interface ShowModalWindowParams {
    message: string;
    debug: boolean
  }

  function showModalWindow(params: ShowModalWindowParams): string;
}

export {};