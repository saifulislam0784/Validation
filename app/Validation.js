

class Validate{

    /**
     * Message show 
     * @param {*} msg 
     * @param {*} type 
     * @returns 
     */

    static setmsg(msg, type='warning'){

        return `<p class="alert alert-${type}">${msg}<button class="close" data-dismiss="alert">&times;</button></p>`;

    }


    /**
     * Emphty value check
     * @param {*} value 
     * @returns 
     */

    static emphty(value){

            if(value == ''){
                return true;
            }else{
                
                return false;

            }

    }


    /**
     * Password confirmation check
     * @param {*} pass 
     * @param {*} cpass 
     * @returns 
     */


    static passConfirm(pass,cpass){
        
        if(pass === cpass){
            return true;
        }else {
            return false;
        }
    }

}

    export default Validate;