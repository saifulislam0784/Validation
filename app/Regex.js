
class Regex{


    /**
     * Email check pattern
     * @param {*} email 
     * @returns 
     */

    static emailCheck(email){

        let pattern = /^[a-z0-9_.]*@[a-z0-9]*\.[a-z]{2,5}$/;

        if( pattern.test((email)) ){

            return true;

        }else{

            return false;

        }
    }


    /**
     * Phone number check pattern
     * @param {*} cell 
     * @returns 
     */

    static cellCheck(cell){
        
        let pattern = /^(01|8801|\+8801)[0-9]{9}$/;

        if( pattern.test((cell)) ){

            return true;

        }else{

            return false;

        }
    }

}

    export default Regex;