export class Main {
    home: Home = new Home();
    extensions: Extensions = new Extensions();

}

export class Home {
    __typename: String = '';
    greeting: Greeting = new Greeting();
    sectionContainer: SectionContainer = new SectionContainer();
}

export class Extensions {
    
}

export class Greeting {
    text: String = '';
}

export class SectionContainer {
    uri: String = '';
    sections: Sections = new Sections();
}

export class Sections {
    items: Items = new Items();
}

export class Items {
    uri: String = '';
    data: Data = new Data();
}

export class Data {
    __typename: String = '';
    title: Title = new Title();

}

export class Title {
    text: String = '';
}

export class SectionItems {

}