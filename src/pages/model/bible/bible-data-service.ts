import { BibleData } from "./bible-data";


export class BibleDataService extends BibleData {

    
    constructor() { 
        super()
    }
    /** 
     * Get Abbreviation of OLD and New Testament
     * 
     *  
     * */

     /**
      * Get All Abbreviation of Old and New Testament
      */
    getAllAbbvOfOldAndNewTestament() : string[] {
        let book = [];
        for (let i in this.bookdetails) {
            book.push(this.bookdetails[i].abbv);
        }
        //console.log("ONT - All Abbv Result: " + book);
        return book;
    } 

    getChapterByIdForOldAndNewTestament(id : number) : number[] {
        return this.bookdetails[id].chapters;
    }

    getAllChaptersOfOldAndNewTestament() : number[] {
        let chapters = [];
        for (let i in this.bookdetails) {
            chapters.push(this.bookdetails[i].chapters);
        }
        //console.log("ONT - All Chapter Result: " + chapters);
        return chapters;
    }

    getVerseByIdForOldAndNewTestament(id : number) : number[] {
        return this.bookdetails[id].verses;
    }

    getAllVersesOfOldAndNewTestament() : number[] {
        let verses = [];
        for (let i in this.bookdetails) {
            verses.push(this.bookdetails[i].verses);
        }
        //console.log("ONT - All Verses Result: " + verses);
        return verses;
    }
    
    getAllTitleOfOldAndNewTestament() : number[] {
        let title = [];
        for (let i in this.bookdetails) {
            title.push(this.bookdetails[i].title);
        }
        //console.log("ONT - All Title Result: " + title);
        return title;
    }

    getTitleByIdForOldAndNewTestament(id : number) : string {
        return this.bookdetails[id].book;
    }

    getTestamentByIdForOldAndNewTestament(id : number) : string {
        return this.bookdetails[id].testament;
    }


    /** 
     * OLD Testament 
     * 
     * 
     * 
     * */

    getAllAbbvOfOldTestament() : string[] {
        let book = [];
        for(let i = 0; i <= (this.bookdetails.length - 28); i++) {
            book.push(this.bookdetails[i].abbv);
        }
        //console.log("OT - All Abbv Result: " + book);
        return book;
    }

    getChapterByIdForOldTestament(id : number) : number[] {
        return this.bookdetails[id].chapters;
    }
    
    getAllChaptersOfOldTestament() : number[] {
        let chapters = [];
        for(let i = 0; i <= (this.bookdetails.length - 28); i++) {
            chapters.push(this.bookdetails[i].chapters);
        }
        //console.log("OT - All Chapters Result: " + chapters);
        return chapters;
    }

    getAllVersesOfOldTestament() : number[] {
        let verses = [];
        for(let i = 0; i <= (this.bookdetails.length - 28); i++) {
            verses.push(this.bookdetails[i].verses);
        }
        //console.log("OT - All Verses Result: " + verses);
        return verses;
    }
    
    getAllTitleOfOldTestament() : number[] {
        let title = [];
        for(let i = 0; i <= (this.bookdetails.length - 28); i++) {
            title.push(this.bookdetails[i].title);
        }
        //console.log("OT - All Title Result: " + title);
        return title;
    }

    getTitleByIdForOldTestament(id : number) : string {
        return this.bookdetails[id].book;
    }
    
    getTestamentByIdForOldTestament(id : number) : string {
        return this.bookdetails[id].testament;
    }


    /** 
     * NEW Testament 
     * 
     * 
     * */

    getAllAbbvOfNewTestament() : string[] {
        let book = [];
        for(let i = 39; i <= (this.bookdetails.length -1); i++) {
            book.push(this.bookdetails[i].abbv);
        }
        //console.log("NT - All Abbv Result: " + book);
        return book;
    }
    
    getChapterByIdForNewTestament(id : number) : number[] {
        return this.bookdetails[id].chapters;
    }
    
    getAllChaptersOfNewTestament() : number[] {
        let chapters = [];
        for(let i = 39; i <= (this.bookdetails.length -1); i++) {
            chapters.push(this.bookdetails[i].chapters);
        }
        //console.log("NT - All Chapters Result: " + chapters);
        return chapters;
    }

    getAllVersesOfNewTestament() : number[] {
        let verses = [];
        for(let i = 39; i <= (this.bookdetails.length -1); i++) {
            verses.push(this.bookdetails[i].verses);
        }
        //console.log("NT - All Verses Result: " + verses);
        return verses;
    }
    
    getAllTitleOfNewTestament() : number[] {
        let title = [];
        for(let i = 39; i <= (this.bookdetails.length -1); i++) {
            title.push(this.bookdetails[i].title);
        }
        //console.log("NT - All Title Result: " + title);
        return title;
    }

    getTitleByIdForNewTestament(id : number) : string {
        return this.bookdetails[id + 39].book;
    }
    
    getTestamentByIdForNewTestament(id : number) : string {
        return this.bookdetails[id + 39].testament;
    }

    
}

