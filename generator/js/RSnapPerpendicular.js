
      // auto generated
      //var self;

      // class constructor:
      function RSnapPerpendicular() {
        

        // should be RSnapPerpendicular_BaseJs.call(this, engine):
        //RSnapPerpendicular.prototype = new RSnapPerpendicular_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSnapPerpendicular.getIdStatic()))) {

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
            qWarning("RSnapPerpendicular.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RSnapPerpendicular_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSnapPerpendicular);
  }

  
  else {
    
        print("RSnapPerpendicular(): wrong number / type of arguments");
      
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

      //RSnapPerpendicular.prototype = new RSnapPerpendicular_BaseJs(engine);
      //RSnapPerpendicular.prototype = new RSnapPerpendicular_Wrapper(engine);
      RSnapPerpendicular.prototype = new Object();

      RSnapPerpendicular.prototype.toString = function() {
          //return "RSnapPerpendicular [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSnapPerpendicular [JS]";
        };
      RSnapPerpendicular.getObjectType = function() {
        return RJSType_RSnapPerpendicular.getIdStatic();
      };

      RSnapPerpendicular.prototype.getObjectType = function() {
        return RJSType_RSnapPerpendicular.getIdStatic();
      };

      RSnapPerpendicular.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSnapPerpendicular.getIdStatic()) {
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
RSnapPerpendicular.Unknown = RSnapPerpendicular_Wrapper.Unknown;
RSnapPerpendicular.Free = RSnapPerpendicular_Wrapper.Free;
RSnapPerpendicular.Grid = RSnapPerpendicular_Wrapper.Grid;
RSnapPerpendicular.Endpoint = RSnapPerpendicular_Wrapper.Endpoint;
RSnapPerpendicular.OnEntity = RSnapPerpendicular_Wrapper.OnEntity;
RSnapPerpendicular.Center = RSnapPerpendicular_Wrapper.Center;
RSnapPerpendicular.Middle = RSnapPerpendicular_Wrapper.Middle;
RSnapPerpendicular.Distance = RSnapPerpendicular_Wrapper.Distance;
RSnapPerpendicular.Intersection = RSnapPerpendicular_Wrapper.Intersection;
RSnapPerpendicular.IntersectionManual = RSnapPerpendicular_Wrapper.IntersectionManual;
RSnapPerpendicular.Reference = RSnapPerpendicular_Wrapper.Reference;
RSnapPerpendicular.Perpendicular = RSnapPerpendicular_Wrapper.Perpendicular;
RSnapPerpendicular.Tangential = RSnapPerpendicular_Wrapper.Tangential;
RSnapPerpendicular.Coordinate = RSnapPerpendicular_Wrapper.Coordinate;
RSnapPerpendicular.CoordinatePolar = RSnapPerpendicular_Wrapper.CoordinatePolar;


      // functions:
      
      // function 
      RSnapPerpendicular.prototype.showUiOptions = function() 
        
      {
        //print("JS: RSnapPerpendicular.prototype.showUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.showUiOptions(
                // call highest level JS implementation:
                //return this.showUiOptionsBase(
                
                    return this.__PROXY__.showUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapPerpendicular);
  }

  
  else {
    
        print("RSnapPerpendicular.showUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RSnapPerpendicular.prototype.hideUiOptions = function() 
        
      {
        //print("JS: RSnapPerpendicular.prototype.hideUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.hideUiOptions(
                // call highest level JS implementation:
                //return this.hideUiOptionsBase(
                
                    return this.__PROXY__.hideUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapPerpendicular);
  }

  
  else {
    
        print("RSnapPerpendicular.hideUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RSnapPerpendicular.prototype.suspendEvent = function(...args) 
          
        {
          //print("JS: RSnapPerpendicular.prototype.suspendEvent");
          return this.__PROXY__.suspendEvent(...args);
        };
    
        // function 
        RSnapPerpendicular.prototype.finishEvent = function(...args) 
          
        {
          //print("JS: RSnapPerpendicular.prototype.finishEvent");
          return this.__PROXY__.finishEvent(...args);
        };
    
        // function 
        RSnapPerpendicular.prototype.getEntityIds = function(...args) 
          
        {
          //print("JS: RSnapPerpendicular.prototype.getEntityIds");
          return this.__PROXY__.getEntityIds(...args);
        };
    
        // function 
        RSnapPerpendicular.prototype.getStatus = function(...args) 
          
        {
          //print("JS: RSnapPerpendicular.prototype.getStatus");
          return this.__PROXY__.getStatus(...args);
        };
    
        // function 
        RSnapPerpendicular.prototype.setStatus = function(...args) 
          
        {
          //print("JS: RSnapPerpendicular.prototype.setStatus");
          return this.__PROXY__.setStatus(...args);
        };
    
        // function 
        RSnapPerpendicular.prototype.getLastSnap = function(...args) 
          
        {
          //print("JS: RSnapPerpendicular.prototype.getLastSnap");
          return this.__PROXY__.getLastSnap(...args);
        };
    
        // function 
        RSnapPerpendicular.prototype.setLastSnap = function(...args) 
          
        {
          //print("JS: RSnapPerpendicular.prototype.setLastSnap");
          return this.__PROXY__.setLastSnap(...args);
        };
    
        // function 
        RSnapPerpendicular.prototype.reset = function(...args) 
          
        {
          //print("JS: RSnapPerpendicular.prototype.reset");
          return this.__PROXY__.reset(...args);
        };
    
        // function 
        RSnapPerpendicular.prototype.snap = function(...args) 
          
        {
          //print("JS: RSnapPerpendicular.prototype.snap");
          return this.__PROXY__.snap(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSnapPerpendicular.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSnapPerpendicular.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RSnapPerpendicular.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      