export interface IClassList {
  id: number;
  name: string;
  description: string;
  attendees: number;
  classImg: string;
}
export interface IClassListProps extends IClassList {
  isJoined: boolean;
}

export interface ISearchBarProps {
  placeholder: string;
  onSearch: React.ChangeEventHandler;
}
