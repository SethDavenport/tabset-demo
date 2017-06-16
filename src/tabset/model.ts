export interface ITabSetRecord {
  id: string,
  title: string,
  tabs: {
    [tabId: string]: ITabRecord
  }
  activeTabId: string,
}

export interface ITabRecord {
  id: string,
  title: string,
  text: string,
  subTabSet?: ITabSetRecord
}
