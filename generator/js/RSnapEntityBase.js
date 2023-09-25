
      // auto generated
      //var self;

      // class constructor:
      function RSnapEntityBase() {
        

        // should be RSnapEntityBase_BaseJs.call(this, engine):
        //RSnapEntityBase.prototype = new RSnapEntityBase_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSnapEntityBase.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RSnapEntityBase);
            //}
          }
          else {
            qWarning("RSnapEntityBase.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RSnapEntityBase.js: No constructor found for class RSnapEntityBase");
            
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

      //RSnapEntityBase.prototype = new RSnapEntityBase_BaseJs(engine);
      //RSnapEntityBase.prototype = new RSnapEntityBase_Wrapper(engine);
      RSnapEntityBase.prototype = new Object();

      RSnapEntityBase.prototype.toString = function() {
          //return "RSnapEntityBase [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSnapEntityBase [JS]";
        };
      RSnapEntityBase.getObjectType = function() {
        return RJSType_RSnapEntityBase.getIdStatic();
      };

      RSnapEntityBase.prototype.getObjectType = function() {
        return RJSType_RSnapEntityBase.getIdStatic();
      };

      RSnapEntityBase.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSnapEntityBase.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RSnap.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Status
RSnapEntityBase.Unknown = RSnapEntityBase_Wrapper.Unknown;
RSnapEntityBase.Free = RSnapEntityBase_Wrapper.Free;
RSnapEntityBase.Grid = RSnapEntityBase_Wrapper.Grid;
RSnapEntityBase.Endpoint = RSnapEntityBase_Wrapper.Endpoint;
RSnapEntityBase.OnEntity = RSnapEntityBase_Wrapper.OnEntity;
RSnapEntityBase.Center = RSnapEntityBase_Wrapper.Center;
RSnapEntityBase.Middle = RSnapEntityBase_Wrapper.Middle;
RSnapEntityBase.Distance = RSnapEntityBase_Wrapper.Distance;
RSnapEntityBase.Intersection = RSnapEntityBase_Wrapper.Intersection;
RSnapEntityBase.IntersectionManual = RSnapEntityBase_Wrapper.IntersectionManual;
RSnapEntityBase.Reference = RSnapEntityBase_Wrapper.Reference;
RSnapEntityBase.Perpendicular = RSnapEntityBase_Wrapper.Perpendicular;
RSnapEntityBase.Tangential = RSnapEntityBase_Wrapper.Tangential;
RSnapEntityBase.Coordinate = RSnapEntityBase_Wrapper.Coordinate;
RSnapEntityBase.CoordinatePolar = RSnapEntityBase_Wrapper.CoordinatePolar;


      // functions:
      
        // function 
        RSnapEntityBase.prototype.showUiOptions = function() 
          
        {
          //print("JS: RSnapEntityBase.prototype.showUiOptions");
          
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.showUiOptions(
                // call highest level JS implementation:
                //return this.showUiOptionsBase(
                return this.showUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapEntityBase);
  }

  
  else {
    
        print("RSnapEntityBase.showUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        RSnapEntityBase.prototype.hideUiOptions = function() 
          
        {
          //print("JS: RSnapEntityBase.prototype.hideUiOptions");
          
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.hideUiOptions(
                // call highest level JS implementation:
                //return this.hideUiOptionsBase(
                return this.hideUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapEntityBase);
  }

  
  else {
    
        print("RSnapEntityBase.hideUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSnapEntityBase.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSnapEntityBase.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    