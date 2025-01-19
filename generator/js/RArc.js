
      // auto generated
      //var self;

      // class constructor:
      function RArc() {
        

        // should be RArc_BaseJs.call(this, engine):
        //RArc.prototype = new RArc_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RArc.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RArc);
            //}
          }
          else {
            qWarning("RArc.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 5 &&
          arguments.length <= 6) {
    
            self = this;
            wrapper = new RArc_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RArc);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RArc);
  }

  
  else 
  
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
            self = this;
            wrapper = new RArc_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RArc);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RArc);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RArc_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RArc);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc(): wrong number / type of arguments");
      
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

      //RArc.prototype = new RArc_BaseJs(engine);
      //RArc.prototype = new RArc_Wrapper(engine);
      RArc.prototype = new Object();

      RArc.prototype.toString = function() {
          //return "RArc [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RArc [JS]";
        };
      RArc.getObjectType = function() {
        return RJSType_RArc.getIdStatic();
      };

      RArc.prototype.getObjectType = function() {
        return RJSType_RArc.getIdStatic();
      };

      RArc.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RArc.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RArc.Unknown = RArc_Wrapper.Unknown;
RArc.Point = RArc_Wrapper.Point;
RArc.Line = RArc_Wrapper.Line;
RArc.Arc = RArc_Wrapper.Arc;
RArc.Circle = RArc_Wrapper.Circle;
RArc.Ellipse = RArc_Wrapper.Ellipse;
RArc.Polyline = RArc_Wrapper.Polyline;
RArc.Spline = RArc_Wrapper.Spline;
RArc.Triangle = RArc_Wrapper.Triangle;
RArc.XLine = RArc_Wrapper.XLine;
RArc.Ray = RArc_Wrapper.Ray;


      // functions:
      

      // static functions:
      

        // static function 
        RArc.createFrom3Points = function() 
          
        {
          //print("JS: RArc.createFrom3Points");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.createFrom3Points(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.createFrom3Points(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.createFrom2PBulge = function() 
          
        {
          //print("JS: RArc.createFrom2PBulge");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.createFrom2PBulge(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.createFrom2PBulge(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.createTangential = function() 
          
        {
          //print("JS: RArc.createTangential");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.createTangential(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.createTangential(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.createBiarc = function() 
          
        {
          //print("JS: RArc.createBiarc");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.createBiarc(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.createBiarc(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RArc.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RArc.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    