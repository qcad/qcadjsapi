
      // auto generated
      //var self;

      // class constructor:
      function RSnapDistance() {
        

        // should be RSnapDistance_BaseJs.call(this, engine):
        //RSnapDistance.prototype = new RSnapDistance_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSnapDistance.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RSnapDistance);
            //}
          }
          else {
            qWarning("RSnapDistance.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RSnapDistance_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RSnapDistance);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSnapDistance);
  }

  
  else {
    
        print("RSnapDistance(): wrong number / type of arguments");
      
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

      //RSnapDistance.prototype = new RSnapDistance_BaseJs(engine);
      //RSnapDistance.prototype = new RSnapDistance_Wrapper(engine);
      RSnapDistance.prototype = new Object();

      RSnapDistance.prototype.toString = function() {
          //return "RSnapDistance [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSnapDistance [JS]";
        };
      RSnapDistance.getObjectType = function() {
        return RJSType_RSnapDistance.getIdStatic();
      };

      RSnapDistance.prototype.getObjectType = function() {
        return RJSType_RSnapDistance.getIdStatic();
      };

      RSnapDistance.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSnapDistance.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RSnap.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RSnapEntityBase.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Status
RSnapDistance.Unknown = RSnapDistance_Wrapper.Unknown;
RSnapDistance.Free = RSnapDistance_Wrapper.Free;
RSnapDistance.Grid = RSnapDistance_Wrapper.Grid;
RSnapDistance.Endpoint = RSnapDistance_Wrapper.Endpoint;
RSnapDistance.OnEntity = RSnapDistance_Wrapper.OnEntity;
RSnapDistance.Center = RSnapDistance_Wrapper.Center;
RSnapDistance.Middle = RSnapDistance_Wrapper.Middle;
RSnapDistance.Distance = RSnapDistance_Wrapper.Distance;
RSnapDistance.Intersection = RSnapDistance_Wrapper.Intersection;
RSnapDistance.IntersectionManual = RSnapDistance_Wrapper.IntersectionManual;
RSnapDistance.Reference = RSnapDistance_Wrapper.Reference;
RSnapDistance.Perpendicular = RSnapDistance_Wrapper.Perpendicular;
RSnapDistance.Tangential = RSnapDistance_Wrapper.Tangential;
RSnapDistance.Coordinate = RSnapDistance_Wrapper.Coordinate;
RSnapDistance.CoordinatePolar = RSnapDistance_Wrapper.CoordinatePolar;


      // functions:
      
        // function 
        RSnapDistance.prototype.showUiOptions = function() 
          
        {
          //print("JS: RSnapDistance.prototype.showUiOptions");
          
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.showUiOptions(
                // call highest level JS implementation:
                //return this.showUiOptionsBase(
                return this.showUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapDistance);
  }

  
  else {
    
        print("RSnapDistance.showUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        RSnapDistance.prototype.hideUiOptions = function() 
          
        {
          //print("JS: RSnapDistance.prototype.hideUiOptions");
          
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.hideUiOptions(
                // call highest level JS implementation:
                //return this.hideUiOptionsBase(
                return this.hideUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapDistance);
  }

  
  else {
    
        print("RSnapDistance.hideUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSnapDistance.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSnapDistance.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    