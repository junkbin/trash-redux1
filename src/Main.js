/**
 * Redux sample example @backend
 */
import { createStore } from 'redux'

class Main{
    static helloRedux() {
        try{
            console.log("Hello Redux!!!");
            console.log(createStore);
        }catch(err){
            throw err;
        }
    }

    static main(){
        try{
           Main.helloRedux(); 
        }catch(err){
            console.error(err);
        }
    }
}


Main.main();