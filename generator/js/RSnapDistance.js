
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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
        RSnapDistance.prototype.suspendEvent = function(...args) 
          
        {
          //print("JS: RSnapDistance.prototype.suspendEvent");
          return this.__PROXY__.suspendEvent(...args);
        };
    
        // function 
        RSnapDistance.prototype.finishEvent = function(...args) 
          
        {
          //print("JS: RSnapDistance.prototype.finishEvent");
          return this.__PROXY__.finishEvent(...args);
        };
    
        // function 
        RSnapDistance.prototype.getEntityIds = function(...args) 
          
        {
          //print("JS: RSnapDistance.prototype.getEntityIds");
          return this.__PROXY__.getEntityIds(...args);
        };
    
        // function 
        RSnapDistance.prototype.getStatus = function(...args) 
          
        {
          //print("JS: RSnapDistance.prototype.getStatus");
          return this.__PROXY__.getStatus(...args);
        };
    
        // function 
        RSnapDistance.prototype.setStatus = function(...args) 
          
        {
          //print("JS: RSnapDistance.prototype.setStatus");
          return this.__PROXY__.setStatus(...args);
        };
    
        // function 
        RSnapDistance.prototype.getLastSnap = function(...args) 
          
        {
          //print("JS: RSnapDistance.prototype.getLastSnap");
          return this.__PROXY__.getLastSnap(...args);
        };
    
        // function 
        RSnapDistance.prototype.setLastSnap = function(...args) 
          
        {
          //print("JS: RSnapDistance.prototype.setLastSnap");
          return this.__PROXY__.setLastSnap(...args);
        };
    
        // function 
        RSnapDistance.prototype.reset = function(...args) 
          
        {
          //print("JS: RSnapDistance.prototype.reset");
          return this.__PROXY__.reset(...args);
        };
    
        // function 
        RSnapDistance.prototype.snap = function(...args) 
          
        {
          //print("JS: RSnapDistance.prototype.snap");
          return this.__PROXY__.snap(...args);
        };
    
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
                
                    return this.__PROXY__.showUiOptionsSuper(
                  
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
                
                    return this.__PROXY__.hideUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapDistance);
  }

  
  else {
    
        print("RSnapDistance.hideUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RSnapDistance.prototype.setDistance = function(...args) 
          
        {
          //print("JS: RSnapDistance.prototype.setDistance");
          return this.__PROXY__.setDistance(...args);
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

      RSnapDistance.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      