
      // auto generated
      //var self;

      // class constructor:
      function RDocumentInterface() {
        

        // should be RDocumentInterface_BaseJs.call(this, engine):
        //RDocumentInterface.prototype = new RDocumentInterface_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDocumentInterface.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDocumentInterface);
            //}
          }
          else {
            qWarning("RDocumentInterface.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RDocumentInterface_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDocumentInterface);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDocumentInterface);
  }

  
  else {
    
        print("RDocumentInterface(): wrong number / type of arguments");
      
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

      //RDocumentInterface.prototype = new RDocumentInterface_BaseJs(engine);
      //RDocumentInterface.prototype = new RDocumentInterface_Wrapper(engine);
      RDocumentInterface.prototype = new Object();

      RDocumentInterface.prototype.toString = function() {
          //return "RDocumentInterface [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDocumentInterface [JS]";
        };
      RDocumentInterface.getObjectType = function() {
        return RJSType_RDocumentInterface.getIdStatic();
      };

      RDocumentInterface.prototype.getObjectType = function() {
        return RJSType_RDocumentInterface.getIdStatic();
      };

      RDocumentInterface.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDocumentInterface.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: IoErrorCode
RDocumentInterface.IoErrorNoError = RDocumentInterface_Wrapper.IoErrorNoError;
RDocumentInterface.IoErrorNoImporterFound = RDocumentInterface_Wrapper.IoErrorNoImporterFound;
RDocumentInterface.IoErrorZeroSize = RDocumentInterface_Wrapper.IoErrorZeroSize;
RDocumentInterface.IoErrorNotFound = RDocumentInterface_Wrapper.IoErrorNotFound;
RDocumentInterface.IoErrorPermission = RDocumentInterface_Wrapper.IoErrorPermission;
RDocumentInterface.IoErrorGeneralImportError = RDocumentInterface_Wrapper.IoErrorGeneralImportError;
RDocumentInterface.IoErrorGeneralImportUrlError = RDocumentInterface_Wrapper.IoErrorGeneralImportUrlError;


      // functions:
      

      // static functions:
      

        // static function 
        RDocumentInterface.getClipboard = function() 
          
        {
          //print("JS: RDocumentInterface.getClipboard");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDocumentInterface_WrapperSingletonInstance.getClipboard(
                  
                );
              

        //copyProperties(this, wrapper, RDocumentInterface);
  }

  
  else {
    
        print("RDocumentInterface.getClipboard(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDocumentInterface.deleteClipboard = function() 
          
        {
          //print("JS: RDocumentInterface.deleteClipboard");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDocumentInterface_WrapperSingletonInstance.deleteClipboard(
                  
                );
              

        //copyProperties(this, wrapper, RDocumentInterface);
  }

  
  else {
    
        print("RDocumentInterface.deleteClipboard(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDocumentInterface.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDocumentInterface.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    