/**
 * Redux sample example @backend
 */
import store from './StateStore';

class Main{
    static helloRedux() {
        try{
            store.dispatch({ type: 'INCREMENT' });

            store.dispatch({ type: 'INCREMENT' });

            store.dispatch({ type: 'DECREMENT' });

        }catch(err){
            throw err;
        }
    }

    static main(){
        try{
            store.subscribe(() => {
                console.log(store.getState())
            });
            
            Main.helloRedux(); 
        }catch(err){
            console.error(err);
        }
    }
}

Main.main();