
      // auto generated
      //var self;

      // class constructor:
      function RTransactionListenerAdapter() {
        

        // should be RTransactionListenerAdapter_BaseJs.call(this, engine):
        //RTransactionListenerAdapter.prototype = new RTransactionListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTransactionListenerAdapter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RTransactionListenerAdapter);
            //}
          }
          else {
            qWarning("RTransactionListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RTransactionListenerAdapter_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RTransactionListenerAdapter);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTransactionListenerAdapter);
  }

  
  else {
    
        print("RTransactionListenerAdapter(): wrong number / type of arguments");
      
    console.trace();
  }
  
        }

        //self = this;
        //if (typeof(this.wrapper)!=="undefined") {
        //  this.wrapper.setEngine(engine);
        //}


        if (typeof(wrapper)!=="undefined") {
          //var localSelf = this;
          //print("QAction self:", localSelf);
          // TODO:
          //this.wrapper.triggered.connect(function(checked) { print("action triggered. self:", localSelf); localSelf.triggeredEmitter(checked); });
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
    this["transactionUpdated(RDocument*,RTransaction*)"] = Object.getPrototypeOf(this).transactionUpdated;
  
    this["currentBlockSet(RDocument*)"] = Object.getPrototypeOf(this).currentBlockSet;
  
          }
        }
      }

      //RTransactionListenerAdapter.prototype = new RTransactionListenerAdapter_BaseJs(engine);
      //RTransactionListenerAdapter.prototype = new RTransactionListenerAdapter_Wrapper(engine);
      RTransactionListenerAdapter.prototype = new Object();

      RTransactionListenerAdapter.prototype.toString = function() {
          //return "RTransactionListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTransactionListenerAdapter [JS]";
        };
      RTransactionListenerAdapter.getObjectType = function() {
        return RJSType_RTransactionListenerAdapter.getIdStatic();
      };

      RTransactionListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RTransactionListenerAdapter.getIdStatic();
      };

      RTransactionListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTransactionListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RTransactionListener.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RTransactionListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTransactionListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    