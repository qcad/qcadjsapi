
      // auto generated
      //var self;

      // class constructor:
      function RSnapIntersection() {
        

        // should be RSnapIntersection_BaseJs.call(this, engine):
        //RSnapIntersection.prototype = new RSnapIntersection_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSnapIntersection.getIdStatic()))) {

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
            qWarning("RSnapIntersection.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RSnapIntersection_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSnapIntersection);
  }

  
  else {
    
        print("RSnapIntersection(): wrong number / type of arguments");
      
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

      //RSnapIntersection.prototype = new RSnapIntersection_BaseJs(engine);
      //RSnapIntersection.prototype = new RSnapIntersection_Wrapper(engine);
      RSnapIntersection.prototype = new Object();

      RSnapIntersection.prototype.toString = function() {
          //return "RSnapIntersection [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSnapIntersection [JS]";
        };
      RSnapIntersection.getObjectType = function() {
        return RJSType_RSnapIntersection.getIdStatic();
      };

      RSnapIntersection.prototype.getObjectType = function() {
        return RJSType_RSnapIntersection.getIdStatic();
      };

      RSnapIntersection.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSnapIntersection.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RSnap.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Status
RSnapIntersection.Unknown = RSnapIntersection_Wrapper.Unknown;
RSnapIntersection.Free = RSnapIntersection_Wrapper.Free;
RSnapIntersection.Grid = RSnapIntersection_Wrapper.Grid;
RSnapIntersection.Endpoint = RSnapIntersection_Wrapper.Endpoint;
RSnapIntersection.OnEntity = RSnapIntersection_Wrapper.OnEntity;
RSnapIntersection.Center = RSnapIntersection_Wrapper.Center;
RSnapIntersection.Middle = RSnapIntersection_Wrapper.Middle;
RSnapIntersection.Distance = RSnapIntersection_Wrapper.Distance;
RSnapIntersection.Intersection = RSnapIntersection_Wrapper.Intersection;
RSnapIntersection.IntersectionManual = RSnapIntersection_Wrapper.IntersectionManual;
RSnapIntersection.Reference = RSnapIntersection_Wrapper.Reference;
RSnapIntersection.Perpendicular = RSnapIntersection_Wrapper.Perpendicular;
RSnapIntersection.Tangential = RSnapIntersection_Wrapper.Tangential;
RSnapIntersection.Coordinate = RSnapIntersection_Wrapper.Coordinate;
RSnapIntersection.CoordinatePolar = RSnapIntersection_Wrapper.CoordinatePolar;


      // functions:
      
      // function 
      RSnapIntersection.prototype.showUiOptions = function() 
        
      {
        //print("JS: RSnapIntersection.prototype.showUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.showUiOptions(
                // call highest level JS implementation:
                //return this.showUiOptionsBase(
                
                    return this.__PROXY__.showUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapIntersection);
  }

  
  else {
    
        print("RSnapIntersection.showUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RSnapIntersection.prototype.hideUiOptions = function() 
        
      {
        //print("JS: RSnapIntersection.prototype.hideUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.hideUiOptions(
                // call highest level JS implementation:
                //return this.hideUiOptionsBase(
                
                    return this.__PROXY__.hideUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapIntersection);
  }

  
  else {
    
        print("RSnapIntersection.hideUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RSnapIntersection.prototype.suspendEvent = function(...args) 
          
        {
          //print("JS: RSnapIntersection.prototype.suspendEvent");
          return this.__PROXY__.suspendEvent(...args);
        };
    
        // function 
        RSnapIntersection.prototype.finishEvent = function(...args) 
          
        {
          //print("JS: RSnapIntersection.prototype.finishEvent");
          return this.__PROXY__.finishEvent(...args);
        };
    
        // function 
        RSnapIntersection.prototype.getEntityIds = function(...args) 
          
        {
          //print("JS: RSnapIntersection.prototype.getEntityIds");
          return this.__PROXY__.getEntityIds(...args);
        };
    
        // function 
        RSnapIntersection.prototype.getStatus = function(...args) 
          
        {
          //print("JS: RSnapIntersection.prototype.getStatus");
          return this.__PROXY__.getStatus(...args);
        };
    
        // function 
        RSnapIntersection.prototype.setStatus = function(...args) 
          
        {
          //print("JS: RSnapIntersection.prototype.setStatus");
          return this.__PROXY__.setStatus(...args);
        };
    
        // function 
        RSnapIntersection.prototype.getLastSnap = function(...args) 
          
        {
          //print("JS: RSnapIntersection.prototype.getLastSnap");
          return this.__PROXY__.getLastSnap(...args);
        };
    
        // function 
        RSnapIntersection.prototype.setLastSnap = function(...args) 
          
        {
          //print("JS: RSnapIntersection.prototype.setLastSnap");
          return this.__PROXY__.setLastSnap(...args);
        };
    
        // function 
        RSnapIntersection.prototype.reset = function(...args) 
          
        {
          //print("JS: RSnapIntersection.prototype.reset");
          return this.__PROXY__.reset(...args);
        };
    
        // function 
        RSnapIntersection.prototype.snap = function(...args) 
          
        {
          //print("JS: RSnapIntersection.prototype.snap");
          return this.__PROXY__.snap(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSnapIntersection.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSnapIntersection.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RSnapIntersection.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      