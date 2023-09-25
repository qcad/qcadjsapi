
      // auto generated
      //var self;

      // class constructor:
      function RDocumentVariables() {
        

        // should be RDocumentVariables_BaseJs.call(this, engine):
        //RDocumentVariables.prototype = new RDocumentVariables_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDocumentVariables.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDocumentVariables);
            //}
          }
          else {
            qWarning("RDocumentVariables.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RDocumentVariables_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDocumentVariables);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDocumentVariables);
  }

  
  else {
    
        print("RDocumentVariables(): wrong number / type of arguments");
      
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

      //RDocumentVariables.prototype = new RDocumentVariables_BaseJs(engine);
      //RDocumentVariables.prototype = new RDocumentVariables_Wrapper(engine);
      RDocumentVariables.prototype = new Object();

      RDocumentVariables.prototype.toString = function() {
          //return "RDocumentVariables [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDocumentVariables [JS]";
        };
      RDocumentVariables.getObjectType = function() {
        return RJSType_RDocumentVariables.getIdStatic();
      };

      RDocumentVariables.prototype.getObjectType = function() {
        return RJSType_RDocumentVariables.getIdStatic();
      };

      RDocumentVariables.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDocumentVariables.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RDocumentVariables.setCustomPropertyAttributes = function() 
          
        {
          //print("JS: RDocumentVariables.setCustomPropertyAttributes");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RDocumentVariables_WrapperSingletonInstance.setCustomPropertyAttributes(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RDocumentVariables);
  }

  
  else {
    
        print("RDocumentVariables.setCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDocumentVariables.getCustomPropertyAttributes = function() 
          
        {
          //print("JS: RDocumentVariables.getCustomPropertyAttributes");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RDocumentVariables_WrapperSingletonInstance.getCustomPropertyAttributes(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RDocumentVariables);
  }

  
  else {
    
        print("RDocumentVariables.getCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDocumentVariables.setMember = function() 
          
        {
          //print("JS: RDocumentVariables.setMember");
          
        };
      

        // static function 
        RDocumentVariables.setMemberX = function() 
          
        {
          //print("JS: RDocumentVariables.setMemberX");
          
        };
      

        // static function 
        RDocumentVariables.setMemberY = function() 
          
        {
          //print("JS: RDocumentVariables.setMemberY");
          
        };
      

        // static function 
        RDocumentVariables.setMemberZ = function() 
          
        {
          //print("JS: RDocumentVariables.setMemberZ");
          
        };
      

        // static function 
        RDocumentVariables.setMemberVector = function() 
          
        {
          //print("JS: RDocumentVariables.setMemberVector");
          
        };
      

        // static function 
        RDocumentVariables.init = function() 
          
        {
          //print("JS: RDocumentVariables.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDocumentVariables_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RDocumentVariables);
  }

  
  else {
    
        print("RDocumentVariables.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDocumentVariables.getRtti = function() 
          
        {
          //print("JS: RDocumentVariables.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDocumentVariables_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RDocumentVariables);
  }

  
  else {
    
        print("RDocumentVariables.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RDocumentVariables.INVALID_ID = 
  RDocumentVariables_WrapperSingletonInstance.INVALID_ID;
RDocumentVariables.INVALID_HANDLE = 
  RDocumentVariables_WrapperSingletonInstance.INVALID_HANDLE;
RDocumentVariables.PropertyCustom = 
  RDocumentVariables_WrapperSingletonInstance.PropertyCustom;
RDocumentVariables.PropertyType = 
  RDocumentVariables_WrapperSingletonInstance.PropertyType;
RDocumentVariables.PropertyHandle = 
  RDocumentVariables_WrapperSingletonInstance.PropertyHandle;
RDocumentVariables.PropertyProtected = 
  RDocumentVariables_WrapperSingletonInstance.PropertyProtected;
RDocumentVariables.PropertyWorkingSet = 
  RDocumentVariables_WrapperSingletonInstance.PropertyWorkingSet;
RDocumentVariables.PropertySelected = 
  RDocumentVariables_WrapperSingletonInstance.PropertySelected;
RDocumentVariables.PropertyInvisible = 
  RDocumentVariables_WrapperSingletonInstance.PropertyInvisible;


      // copy function:
      //RDocumentVariables.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDocumentVariables.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    