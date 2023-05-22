export class Dashboard {
    typeName: String = '';
    sections: Array<Section> = new Array();
}

export class Section {
    title: String = '';
    sectionItems: Array<SectionItem> = new Array();
}

export class SectionItem {
    typeName: String = '';
    name: String = '';
    coverImg?: String = '';
    relDate?: String = '';
    subImg?: String = '';
    duration?: Number = 0;
    subText?: String = '';
}
