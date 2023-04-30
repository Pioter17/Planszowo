export type GameList = {
  count:number,
  games:GameItem[],
}

export type GameItem = {
  handle :string,
  images: {
    large:string,
    medium:string,
    small:string,
  },
  details: string,
  price: number
}
