export interface Tweet {
  tweetId: string;
  userId?: number;
  userName: string;
  message: string;
  postedAt: string;
  disappearAt: string;
  lat: number;
  lng: number;
}
