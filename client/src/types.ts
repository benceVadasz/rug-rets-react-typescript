export type DesignContextState = {
    designs: [];
    setPage: (page: number) => void;
    currentPage: number;
  };

export type DesignType = {
    id: string,
    title: string,
    colors: string[],
    imageUrl: string,
    description: string,
    userName: string,
    rank: number,
    numHearts: number
}

export type ParamTypes = {
    id: string;
}
