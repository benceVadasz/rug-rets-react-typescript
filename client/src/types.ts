export type DesignContextState = {
    designs: [];
  };

export type DesignType = {
    id: number,
    title: string,
    colors: string[],
    imageUrl: string,
    description: string,
    userName: string
}

export type ParamTypes = {
    id: string;
}
