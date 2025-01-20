
      // auto generated
      //var self;

      // class constructor:
      function RSnapGrid() {
        

        // should be RSnapGrid_BaseJs.call(this, engine):
        //RSnapGrid.prototype = new RSnapGrid_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSnapGrid.getIdStatic()))) {

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
            qWarning("RSnapGrid.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RSnapGrid_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSnapGrid);
  }

  
  else {
    
        print("RSnapGrid(): wrong number / type of arguments");
      
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

      //RSnapGrid.prototype = new RSnapGrid_BaseJs(engine);
      //RSnapGrid.prototype = new RSnapGrid_Wrapper(engine);
      RSnapGrid.prototype = new Object();

      RSnapGrid.prototype.toString = function() {
          //return "RSnapGrid [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSnapGrid [JS]";
        };
      RSnapGrid.getObjectType = function() {
        return RJSType_RSnapGrid.getIdStatic();
      };

      RSnapGrid.prototype.getObjectType = function() {
        return RJSType_RSnapGrid.getIdStatic();
      };

      RSnapGrid.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSnapGrid.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RSnap.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Status
RSnapGrid.Unknown = RSnapGrid_Wrapper.Unknown;
RSnapGrid.Free = RSnapGrid_Wrapper.Free;
RSnapGrid.Grid = RSnapGrid_Wrapper.Grid;
RSnapGrid.Endpoint = RSnapGrid_Wrapper.Endpoint;
RSnapGrid.OnEntity = RSnapGrid_Wrapper.OnEntity;
RSnapGrid.Center = RSnapGrid_Wrapper.Center;
RSnapGrid.Middle = RSnapGrid_Wrapper.Middle;
RSnapGrid.Distance = RSnapGrid_Wrapper.Distance;
RSnapGrid.Intersection = RSnapGrid_Wrapper.Intersection;
RSnapGrid.IntersectionManual = RSnapGrid_Wrapper.IntersectionManual;
RSnapGrid.Reference = RSnapGrid_Wrapper.Reference;
RSnapGrid.Perpendicular = RSnapGrid_Wrapper.Perpendicular;
RSnapGrid.Tangential = RSnapGrid_Wrapper.Tangential;
RSnapGrid.Coordinate = RSnapGrid_Wrapper.Coordinate;
RSnapGrid.CoordinatePolar = RSnapGrid_Wrapper.CoordinatePolar;


      // functions:
      
      // function 
      RSnapGrid.prototype.showUiOptions = function() 
        
      {
        //print("JS: RSnapGrid.prototype.showUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.showUiOptions(
                // call highest level JS implementation:
                //return this.showUiOptionsBase(
                
                    return this.__PROXY__.showUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapGrid);
  }

  
  else {
    
        print("RSnapGrid.showUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RSnapGrid.prototype.hideUiOptions = function() 
        
      {
        //print("JS: RSnapGrid.prototype.hideUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.hideUiOptions(
                // call highest level JS implementation:
                //return this.hideUiOptionsBase(
                
                    return this.__PROXY__.hideUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapGrid);
  }

  
  else {
    
        print("RSnapGrid.hideUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RSnapGrid.prototype.suspendEvent = function(...args) 
          
        {
          //print("JS: RSnapGrid.prototype.suspendEvent");
          return this.__PROXY__.suspendEvent(...args);
        };
    
        // function 
        RSnapGrid.prototype.finishEvent = function(...args) 
          
        {
          //print("JS: RSnapGrid.prototype.finishEvent");
          return this.__PROXY__.finishEvent(...args);
        };
    
        // function 
        RSnapGrid.prototype.getEntityIds = function(...args) 
          
        {
          //print("JS: RSnapGrid.prototype.getEntityIds");
          return this.__PROXY__.getEntityIds(...args);
        };
    
        // function 
        RSnapGrid.prototype.getStatus = function(...args) 
          
        {
          //print("JS: RSnapGrid.prototype.getStatus");
          return this.__PROXY__.getStatus(...args);
        };
    
        // function 
        RSnapGrid.prototype.setStatus = function(...args) 
          
        {
          //print("JS: RSnapGrid.prototype.setStatus");
          return this.__PROXY__.setStatus(...args);
        };
    
        // function 
        RSnapGrid.prototype.getLastSnap = function(...args) 
          
        {
          //print("JS: RSnapGrid.prototype.getLastSnap");
          return this.__PROXY__.getLastSnap(...args);
        };
    
        // function 
        RSnapGrid.prototype.setLastSnap = function(...args) 
          
        {
          //print("JS: RSnapGrid.prototype.setLastSnap");
          return this.__PROXY__.setLastSnap(...args);
        };
    
        // function 
        RSnapGrid.prototype.reset = function(...args) 
          
        {
          //print("JS: RSnapGrid.prototype.reset");
          return this.__PROXY__.reset(...args);
        };
    
        // function 
        RSnapGrid.prototype.snap = function(...args) 
          
        {
          //print("JS: RSnapGrid.prototype.snap");
          return this.__PROXY__.snap(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSnapGrid.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSnapGrid.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RSnapGrid.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      