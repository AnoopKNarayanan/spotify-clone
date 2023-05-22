export class Library {
    artists: Array<Artist> = new Array();
    sortOrders: Array<SortOrder> = new Array();
}

export class Artist {
    name: String = '';
    imgUrl: String = '';
}

export class SortOrder {
    id: String = '';
    name: String = '';
    isSelected: Boolean = false;
}

export class SelectedSortOrder {
    id: String = '';
    name: String = '';
}
