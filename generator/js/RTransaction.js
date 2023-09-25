
      // auto generated
      //var self;

      // class constructor:
      function RTransaction() {
        

        // should be RTransaction_BaseJs.call(this, engine):
        //RTransaction.prototype = new RTransaction_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTransaction.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RTransaction);
            //}
          }
          else {
            qWarning("RTransaction.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new RTransaction_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RTransaction);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTransaction);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RTransaction_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RTransaction);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTransaction);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RTransaction_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RTransaction);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTransaction);
  }

  
  else {
    
        print("RTransaction(): wrong number / type of arguments");
      
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
            
          }
        }
      }

      //RTransaction.prototype = new RTransaction_BaseJs(engine);
      //RTransaction.prototype = new RTransaction_Wrapper(engine);
      RTransaction.prototype = new Object();

      RTransaction.prototype.toString = function() {
          //return "RTransaction [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTransaction [JS]";
        };
      RTransaction.getObjectType = function() {
        return RJSType_RTransaction.getIdStatic();
      };

      RTransaction.prototype.getObjectType = function() {
        return RJSType_RTransaction.getIdStatic();
      };

      RTransaction.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTransaction.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RTransaction.Generic = RTransaction_Wrapper.Generic;
RTransaction.CurrentLayerChange = RTransaction_Wrapper.CurrentLayerChange;
RTransaction.CurrentLayerSelectionChange = RTransaction_Wrapper.CurrentLayerSelectionChange;
RTransaction.LayerLockStatusChange = RTransaction_Wrapper.LayerLockStatusChange;
RTransaction.LayerVisibilityStatusChange = RTransaction_Wrapper.LayerVisibilityStatusChange;
RTransaction.SaveWorkingSet = RTransaction_Wrapper.SaveWorkingSet;
RTransaction.ChangeDocumentSetting = RTransaction_Wrapper.ChangeDocumentSetting;
RTransaction.Undo = RTransaction_Wrapper.Undo;
RTransaction.Redo = RTransaction_Wrapper.Redo;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RTransaction.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTransaction.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    