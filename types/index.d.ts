declare global {
  
  interface ShowModalWindowParams {
    message: string;
    debug: boolean
  }

  interface DetectLazyTags {
    debug: boolean
  }

  interface LazyLoadAlgorithm {
    entities: NodeListOf<HTMLImageElement>
  }

  function showModalWindow(params: ShowModalWindowParams): string;
}

export {};