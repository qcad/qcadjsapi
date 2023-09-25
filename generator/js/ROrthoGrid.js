
      // auto generated
      //var self;

      // class constructor:
      function ROrthoGrid() {
        

        // should be ROrthoGrid_BaseJs.call(this, engine):
        //ROrthoGrid.prototype = new ROrthoGrid_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_ROrthoGrid.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, ROrthoGrid);
            //}
          }
          else {
            qWarning("ROrthoGrid.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new ROrthoGrid_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, ROrthoGrid);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, ROrthoGrid);
  }

  
  else {
    
        print("ROrthoGrid(): wrong number / type of arguments");
      
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

      //ROrthoGrid.prototype = new ROrthoGrid_BaseJs(engine);
      //ROrthoGrid.prototype = new ROrthoGrid_Wrapper(engine);
      ROrthoGrid.prototype = new Object();

      ROrthoGrid.prototype.toString = function() {
          //return "ROrthoGrid [JS] [0x" + this.getAddress().toString(16) + "]";
          return "ROrthoGrid [JS]";
        };
      ROrthoGrid.getObjectType = function() {
        return RJSType_ROrthoGrid.getIdStatic();
      };

      ROrthoGrid.prototype.getObjectType = function() {
        return RJSType_ROrthoGrid.getIdStatic();
      };

      ROrthoGrid.prototype.isOfObjectType = function(t) {
        if (t===RJSType_ROrthoGrid.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RGrid.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        ROrthoGrid.getIdealGridSpacing = function() 
          
        {
          //print("JS: ROrthoGrid.getIdealGridSpacing");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return ROrthoGrid_WrapperSingletonInstance.getIdealGridSpacing(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, ROrthoGrid);
  }

  
  else {
    
        print("ROrthoGrid.getIdealGridSpacing(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        ROrthoGrid.isFractionalFormat = function() 
          
        {
          //print("JS: ROrthoGrid.isFractionalFormat");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return ROrthoGrid_WrapperSingletonInstance.isFractionalFormat(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, ROrthoGrid);
  }

  
  else {
    
        print("ROrthoGrid.isFractionalFormat(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        ROrthoGrid.inchAutoscale = function() 
          
        {
          //print("JS: ROrthoGrid.inchAutoscale");
          
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //ROrthoGrid.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //ROrthoGrid.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    