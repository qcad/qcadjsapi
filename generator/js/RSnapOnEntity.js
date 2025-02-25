
      // auto generated
      //var self;

      // class constructor:
      function RSnapOnEntity() {
        

        // should be RSnapOnEntity_BaseJs.call(this, engine):
        //RSnapOnEntity.prototype = new RSnapOnEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSnapOnEntity.getIdStatic()))) {

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
            qWarning("RSnapOnEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RSnapOnEntity_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSnapOnEntity);
  }

  
  else {
    
        print("RSnapOnEntity(): wrong number / type of arguments");
      
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

      //RSnapOnEntity.prototype = new RSnapOnEntity_BaseJs(engine);
      //RSnapOnEntity.prototype = new RSnapOnEntity_Wrapper(engine);
      RSnapOnEntity.prototype = new Object();

      RSnapOnEntity.prototype.toString = function() {
          //return "RSnapOnEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSnapOnEntity [JS]";
        };
      RSnapOnEntity.getObjectType = function() {
        return RJSType_RSnapOnEntity.getIdStatic();
      };

      RSnapOnEntity.prototype.getObjectType = function() {
        return RJSType_RSnapOnEntity.getIdStatic();
      };

      RSnapOnEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSnapOnEntity.getIdStatic()) {
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
RSnapOnEntity.Unknown = RSnapOnEntity_Wrapper.Unknown;
RSnapOnEntity.Free = RSnapOnEntity_Wrapper.Free;
RSnapOnEntity.Grid = RSnapOnEntity_Wrapper.Grid;
RSnapOnEntity.Endpoint = RSnapOnEntity_Wrapper.Endpoint;
RSnapOnEntity.OnEntity = RSnapOnEntity_Wrapper.OnEntity;
RSnapOnEntity.Center = RSnapOnEntity_Wrapper.Center;
RSnapOnEntity.Middle = RSnapOnEntity_Wrapper.Middle;
RSnapOnEntity.Distance = RSnapOnEntity_Wrapper.Distance;
RSnapOnEntity.Intersection = RSnapOnEntity_Wrapper.Intersection;
RSnapOnEntity.IntersectionManual = RSnapOnEntity_Wrapper.IntersectionManual;
RSnapOnEntity.Reference = RSnapOnEntity_Wrapper.Reference;
RSnapOnEntity.Perpendicular = RSnapOnEntity_Wrapper.Perpendicular;
RSnapOnEntity.Tangential = RSnapOnEntity_Wrapper.Tangential;
RSnapOnEntity.Coordinate = RSnapOnEntity_Wrapper.Coordinate;
RSnapOnEntity.CoordinatePolar = RSnapOnEntity_Wrapper.CoordinatePolar;


      // functions:
      
      // function 
      RSnapOnEntity.prototype.showUiOptions = function() 
        
      {
        //print("JS: RSnapOnEntity.prototype.showUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.showUiOptions(
                // call highest level JS implementation:
                //return this.showUiOptionsBase(
                
                    return this.__PROXY__.showUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapOnEntity);
  }

  
  else {
    
        print("RSnapOnEntity.showUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RSnapOnEntity.prototype.hideUiOptions = function() 
        
      {
        //print("JS: RSnapOnEntity.prototype.hideUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.hideUiOptions(
                // call highest level JS implementation:
                //return this.hideUiOptionsBase(
                
                    return this.__PROXY__.hideUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapOnEntity);
  }

  
  else {
    
        print("RSnapOnEntity.hideUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RSnapOnEntity.prototype.suspendEvent = function(...args) 
          
        {
          //print("JS: RSnapOnEntity.prototype.suspendEvent");
          return this.__PROXY__.suspendEvent(...args);
        };
    
        // function 
        RSnapOnEntity.prototype.finishEvent = function(...args) 
          
        {
          //print("JS: RSnapOnEntity.prototype.finishEvent");
          return this.__PROXY__.finishEvent(...args);
        };
    
        // function 
        RSnapOnEntity.prototype.getEntityIds = function(...args) 
          
        {
          //print("JS: RSnapOnEntity.prototype.getEntityIds");
          return this.__PROXY__.getEntityIds(...args);
        };
    
        // function 
        RSnapOnEntity.prototype.getStatus = function(...args) 
          
        {
          //print("JS: RSnapOnEntity.prototype.getStatus");
          return this.__PROXY__.getStatus(...args);
        };
    
        // function 
        RSnapOnEntity.prototype.setStatus = function(...args) 
          
        {
          //print("JS: RSnapOnEntity.prototype.setStatus");
          return this.__PROXY__.setStatus(...args);
        };
    
        // function 
        RSnapOnEntity.prototype.getLastSnap = function(...args) 
          
        {
          //print("JS: RSnapOnEntity.prototype.getLastSnap");
          return this.__PROXY__.getLastSnap(...args);
        };
    
        // function 
        RSnapOnEntity.prototype.setLastSnap = function(...args) 
          
        {
          //print("JS: RSnapOnEntity.prototype.setLastSnap");
          return this.__PROXY__.setLastSnap(...args);
        };
    
        // function 
        RSnapOnEntity.prototype.reset = function(...args) 
          
        {
          //print("JS: RSnapOnEntity.prototype.reset");
          return this.__PROXY__.reset(...args);
        };
    
        // function 
        RSnapOnEntity.prototype.snap = function(...args) 
          
        {
          //print("JS: RSnapOnEntity.prototype.snap");
          return this.__PROXY__.snap(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSnapOnEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSnapOnEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RSnapOnEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      