import { StructureResolver } from "sanity/desk";

export const structure : StructureResolver = (S) =>
  S.list()
  // főkönyvtár
    .title('Tartalom')
    .items([
      // alkönyvtár
      S.listItem()
        .title('Galéria')
        .schemaType('document')
        .child(
          // mellékkönyvtár
          S.list()
            .title('Képek')
            .items([
              // almappák
              S.listItem()
                .title('Banner')
                .schemaType('document')
                .child(
                  S.documentTypeList('banner')
                  .defaultOrdering([{field: "caption", direction: 'asc'}])
                ),
                S.listItem()
                .title('Képek')
                .schemaType('document')
                .child(
                  S.documentTypeList('gallery')
                  .defaultOrdering([{field: "caption", direction: 'asc'}])
                ),
                S.listItem()
                  .title('Logo')
                  .schemaType('document')
                  .child(
                    S.documentTypeList('logo')
                    .defaultOrdering([{field: "caption", direction: 'asc'}])
                ),
                S.listItem()
                .title('Statikus Oldal')
                .schemaType('document')
                .child(
                  S.documentTypeList('statical')
                  .defaultOrdering([{field: "caption", direction: 'asc'}])
                ),
                S.listItem()
                .title('Textúrák')
                .schemaType('document')
                .child(
                  S.documentTypeList('texture')
                  .defaultOrdering([{field: "caption", direction: 'asc'}])
                ),
                S.listItem()
                .title('Fajok')
                .schemaType('document')
                .child(
                  S.documentTypeList('races')
                  .defaultOrdering([{field: "caption", direction: 'asc'}])
                )
            ]) //end of items[]
        ), //end of child
      S.listItem()
        .title('Cikkek')
        .schemaType('document')
        .child(
          S.list()
            .title('Cikkek Mappa')
            .items([
              S.listItem()
                .title('Csokán András cikkei')
                .schemaType('document')
                .child(
                  S.documentTypeList('post')
                  .filter(`author == "andras"`)
                  .defaultOrdering([{field: "caption", direction: 'desc'}])
                ),
              S.listItem()
                .title('Udvari Gábor cikkei')
                .schemaType('document')
                .child(
                  S.documentTypeList('post')
                  .filter(`author == "gabor"`)
                  .defaultOrdering([{field: "caption", direction: 'desc'}])
                )
            ])
        ),
        S.listItem()
        .title('Felhasználók')
        .schemaType('document')
        .child(
          S.list()
            .title('Felhasználó Lista')
            .items([
              S.listItem()
                .title('Szerkesztők')
                .schemaType('document')
                .child(
                  S.documentTypeList('szerk')
                  .filter('_type == "szerk"')
                  .defaultOrdering([{field: "caption", direction: 'asc'}])
                ),
                S.listItem()
                .title('Regisztráltak')
                .schemaType('document')
                .child(
                  S.documentTypeList('register')
                  .filter('_type == "register"')
                  .defaultOrdering([{field: "caption", direction: 'asc'}])
                )
            ])
        )
    ])