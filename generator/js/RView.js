
      // auto generated
      //var self;

      // class constructor:
      function RView() {
        

        // should be RView_BaseJs.call(this, engine):
        //RView.prototype = new RView_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RView.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RView);
            //}
          }
          else {
            qWarning("RView.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 5) {
    
            self = this;
            wrapper = new RView_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RView);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RView);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RView_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RView);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RView);
  }

  
  else {
    
        print("RView(): wrong number / type of arguments");
      
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

      //RView.prototype = new RView_BaseJs(engine);
      //RView.prototype = new RView_Wrapper(engine);
      RView.prototype = new Object();

      RView.prototype.toString = function() {
          //return "RView [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RView [JS]";
        };
      RView.getObjectType = function() {
        return RJSType_RView.getIdStatic();
      };

      RView.prototype.getObjectType = function() {
        return RJSType_RView.getIdStatic();
      };

      RView.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RView.getIdStatic()) {
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
        RView.init = function() 
          
        {
          //print("JS: RView.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RView_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RView);
  }

  
  else {
    
        print("RView.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RView.getRtti = function() 
          
        {
          //print("JS: RView.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RView_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RView);
  }

  
  else {
    
        print("RView.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RView.INVALID_ID = 
  RView_WrapperSingletonInstance.INVALID_ID;
RView.INVALID_HANDLE = 
  RView_WrapperSingletonInstance.INVALID_HANDLE;
RView.PropertyCustom = 
  RView_WrapperSingletonInstance.PropertyCustom;
RView.PropertyType = 
  RView_WrapperSingletonInstance.PropertyType;
RView.PropertyHandle = 
  RView_WrapperSingletonInstance.PropertyHandle;
RView.PropertyProtected = 
  RView_WrapperSingletonInstance.PropertyProtected;
RView.PropertyWorkingSet = 
  RView_WrapperSingletonInstance.PropertyWorkingSet;
RView.PropertySelected = 
  RView_WrapperSingletonInstance.PropertySelected;
RView.PropertyInvisible = 
  RView_WrapperSingletonInstance.PropertyInvisible;


      // copy function:
      //RView.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RView.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    