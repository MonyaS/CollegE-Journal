export type StudentJournalT = {
    can_edit:0,
    student:{
        full_name:string,
        index:number
    },
    columns:{
        column_index:number,
        date:string,
        cells:{
            index:number,
            value:string
        }[]
    }[]
}