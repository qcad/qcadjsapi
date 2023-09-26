
      // auto generated
      //var self;

      // class constructor:
      function RTransform() {
        

        // should be RTransform_BaseJs.call(this, engine):
        //RTransform.prototype = new RTransform_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTransform.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RTransform);
            //}
          }
          else {
            qWarning("RTransform.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RTransform_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RTransform);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTransform);
  }

  
  else {
    
        print("RTransform(): wrong number / type of arguments");
      
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

      //RTransform.prototype = new RTransform_BaseJs(engine);
      //RTransform.prototype = new RTransform_Wrapper(engine);
      RTransform.prototype = new Object();

      RTransform.prototype.toString = function() {
          //return "RTransform [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTransform [JS]";
        };
      RTransform.getObjectType = function() {
        return RJSType_RTransform.getIdStatic();
      };

      RTransform.prototype.getObjectType = function() {
        return RJSType_RTransform.getIdStatic();
      };

      RTransform.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTransform.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QTransform.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RTransform.squareToQuad = function() 
          
        {
          //print("JS: RTransform.squareToQuad");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RTransform_WrapperSingletonInstance.squareToQuad(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RTransform);
  }

  
  else {
    
        print("RTransform.squareToQuad(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTransform.quadToSquare = function() 
          
        {
          //print("JS: RTransform.quadToSquare");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RTransform_WrapperSingletonInstance.quadToSquare(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RTransform);
  }

  
  else {
    
        print("RTransform.quadToSquare(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTransform.quadToQuad = function() 
          
        {
          //print("JS: RTransform.quadToQuad");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RTransform_WrapperSingletonInstance.quadToQuad(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTransform);
  }

  
  else {
    
        print("RTransform.quadToQuad(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTransform.fromTranslate = function() 
          
        {
          //print("JS: RTransform.fromTranslate");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RTransform_WrapperSingletonInstance.fromTranslate(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RTransform);
  }

  
  else {
    
        print("RTransform.fromTranslate(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTransform.fromScale = function() 
          
        {
          //print("JS: RTransform.fromScale");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RTransform_WrapperSingletonInstance.fromScale(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RTransform);
  }

  
  else {
    
        print("RTransform.fromScale(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RTransform.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTransform.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    