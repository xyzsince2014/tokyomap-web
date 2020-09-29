export interface Tweet {
  tweetId: string;
  userId?: number;
  userName: string;
  message: string;
  postedAt: string;
  lat: number;
  lng: number;
}
