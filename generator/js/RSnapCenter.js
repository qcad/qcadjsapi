
      // auto generated
      //var self;

      // class constructor:
      function RSnapCenter() {
        

        // should be RSnapCenter_BaseJs.call(this, engine):
        //RSnapCenter.prototype = new RSnapCenter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSnapCenter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RSnapCenter);
            //}
          }
          else {
            qWarning("RSnapCenter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RSnapCenter_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RSnapCenter);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSnapCenter);
  }

  
  else {
    
        print("RSnapCenter(): wrong number / type of arguments");
      
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

      //RSnapCenter.prototype = new RSnapCenter_BaseJs(engine);
      //RSnapCenter.prototype = new RSnapCenter_Wrapper(engine);
      RSnapCenter.prototype = new Object();

      RSnapCenter.prototype.toString = function() {
          //return "RSnapCenter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSnapCenter [JS]";
        };
      RSnapCenter.getObjectType = function() {
        return RJSType_RSnapCenter.getIdStatic();
      };

      RSnapCenter.prototype.getObjectType = function() {
        return RJSType_RSnapCenter.getIdStatic();
      };

      RSnapCenter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSnapCenter.getIdStatic()) {
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
RSnapCenter.Unknown = RSnapCenter_Wrapper.Unknown;
RSnapCenter.Free = RSnapCenter_Wrapper.Free;
RSnapCenter.Grid = RSnapCenter_Wrapper.Grid;
RSnapCenter.Endpoint = RSnapCenter_Wrapper.Endpoint;
RSnapCenter.OnEntity = RSnapCenter_Wrapper.OnEntity;
RSnapCenter.Center = RSnapCenter_Wrapper.Center;
RSnapCenter.Middle = RSnapCenter_Wrapper.Middle;
RSnapCenter.Distance = RSnapCenter_Wrapper.Distance;
RSnapCenter.Intersection = RSnapCenter_Wrapper.Intersection;
RSnapCenter.IntersectionManual = RSnapCenter_Wrapper.IntersectionManual;
RSnapCenter.Reference = RSnapCenter_Wrapper.Reference;
RSnapCenter.Perpendicular = RSnapCenter_Wrapper.Perpendicular;
RSnapCenter.Tangential = RSnapCenter_Wrapper.Tangential;
RSnapCenter.Coordinate = RSnapCenter_Wrapper.Coordinate;
RSnapCenter.CoordinatePolar = RSnapCenter_Wrapper.CoordinatePolar;


      // functions:
      
        // function 
        RSnapCenter.prototype.showUiOptions = function() 
          
        {
          //print("JS: RSnapCenter.prototype.showUiOptions");
          
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.showUiOptions(
                // call highest level JS implementation:
                //return this.showUiOptionsBase(
                return this.showUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapCenter);
  }

  
  else {
    
        print("RSnapCenter.showUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        RSnapCenter.prototype.hideUiOptions = function() 
          
        {
          //print("JS: RSnapCenter.prototype.hideUiOptions");
          
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.hideUiOptions(
                // call highest level JS implementation:
                //return this.hideUiOptionsBase(
                return this.hideUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapCenter);
  }

  
  else {
    
        print("RSnapCenter.hideUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSnapCenter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSnapCenter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    