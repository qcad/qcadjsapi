
      // auto generated
      //var self;

      // class constructor:
      function RSnapEnd() {
        

        // should be RSnapEnd_BaseJs.call(this, engine):
        //RSnapEnd.prototype = new RSnapEnd_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSnapEnd.getIdStatic()))) {

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
            qWarning("RSnapEnd.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RSnapEnd_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSnapEnd);
  }

  
  else {
    
        print("RSnapEnd(): wrong number / type of arguments");
      
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

      //RSnapEnd.prototype = new RSnapEnd_BaseJs(engine);
      //RSnapEnd.prototype = new RSnapEnd_Wrapper(engine);
      RSnapEnd.prototype = new Object();

      RSnapEnd.prototype.toString = function() {
          //return "RSnapEnd [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSnapEnd [JS]";
        };
      RSnapEnd.getObjectType = function() {
        return RJSType_RSnapEnd.getIdStatic();
      };

      RSnapEnd.prototype.getObjectType = function() {
        return RJSType_RSnapEnd.getIdStatic();
      };

      RSnapEnd.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSnapEnd.getIdStatic()) {
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
RSnapEnd.Unknown = RSnapEnd_Wrapper.Unknown;
RSnapEnd.Free = RSnapEnd_Wrapper.Free;
RSnapEnd.Grid = RSnapEnd_Wrapper.Grid;
RSnapEnd.Endpoint = RSnapEnd_Wrapper.Endpoint;
RSnapEnd.OnEntity = RSnapEnd_Wrapper.OnEntity;
RSnapEnd.Center = RSnapEnd_Wrapper.Center;
RSnapEnd.Middle = RSnapEnd_Wrapper.Middle;
RSnapEnd.Distance = RSnapEnd_Wrapper.Distance;
RSnapEnd.Intersection = RSnapEnd_Wrapper.Intersection;
RSnapEnd.IntersectionManual = RSnapEnd_Wrapper.IntersectionManual;
RSnapEnd.Reference = RSnapEnd_Wrapper.Reference;
RSnapEnd.Perpendicular = RSnapEnd_Wrapper.Perpendicular;
RSnapEnd.Tangential = RSnapEnd_Wrapper.Tangential;
RSnapEnd.Coordinate = RSnapEnd_Wrapper.Coordinate;
RSnapEnd.CoordinatePolar = RSnapEnd_Wrapper.CoordinatePolar;


      // functions:
      
      // function 
      RSnapEnd.prototype.showUiOptions = function() 
        
      {
        //print("JS: RSnapEnd.prototype.showUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.showUiOptions(
                // call highest level JS implementation:
                //return this.showUiOptionsBase(
                
                    return this.__PROXY__.showUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapEnd);
  }

  
  else {
    
        print("RSnapEnd.showUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RSnapEnd.prototype.hideUiOptions = function() 
        
      {
        //print("JS: RSnapEnd.prototype.hideUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.hideUiOptions(
                // call highest level JS implementation:
                //return this.hideUiOptionsBase(
                
                    return this.__PROXY__.hideUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapEnd);
  }

  
  else {
    
        print("RSnapEnd.hideUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RSnapEnd.prototype.suspendEvent = function(...args) 
          
        {
          //print("JS: RSnapEnd.prototype.suspendEvent");
          return this.__PROXY__.suspendEvent(...args);
        };
    
        // function 
        RSnapEnd.prototype.finishEvent = function(...args) 
          
        {
          //print("JS: RSnapEnd.prototype.finishEvent");
          return this.__PROXY__.finishEvent(...args);
        };
    
        // function 
        RSnapEnd.prototype.getEntityIds = function(...args) 
          
        {
          //print("JS: RSnapEnd.prototype.getEntityIds");
          return this.__PROXY__.getEntityIds(...args);
        };
    
        // function 
        RSnapEnd.prototype.getStatus = function(...args) 
          
        {
          //print("JS: RSnapEnd.prototype.getStatus");
          return this.__PROXY__.getStatus(...args);
        };
    
        // function 
        RSnapEnd.prototype.setStatus = function(...args) 
          
        {
          //print("JS: RSnapEnd.prototype.setStatus");
          return this.__PROXY__.setStatus(...args);
        };
    
        // function 
        RSnapEnd.prototype.getLastSnap = function(...args) 
          
        {
          //print("JS: RSnapEnd.prototype.getLastSnap");
          return this.__PROXY__.getLastSnap(...args);
        };
    
        // function 
        RSnapEnd.prototype.setLastSnap = function(...args) 
          
        {
          //print("JS: RSnapEnd.prototype.setLastSnap");
          return this.__PROXY__.setLastSnap(...args);
        };
    
        // function 
        RSnapEnd.prototype.reset = function(...args) 
          
        {
          //print("JS: RSnapEnd.prototype.reset");
          return this.__PROXY__.reset(...args);
        };
    
        // function 
        RSnapEnd.prototype.snap = function(...args) 
          
        {
          //print("JS: RSnapEnd.prototype.snap");
          return this.__PROXY__.snap(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSnapEnd.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSnapEnd.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RSnapEnd.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      