
      // auto generated
      //var self;

      // class constructor:
      function RVector() {
        

        // should be RVector_BaseJs.call(this, engine):
        //RVector.prototype = new RVector_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RVector.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RVector);
            //}
          }
          else {
            qWarning("RVector.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new RVector_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RVector);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RVector);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RVector_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RVector);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RVector);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RVector_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RVector);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector(): wrong number / type of arguments");
      
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

      //RVector.prototype = new RVector_BaseJs(engine);
      //RVector.prototype = new RVector_Wrapper(engine);
      RVector.prototype = new Object();

      RVector.prototype.toString = function() {
          //return "RVector [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RVector [JS]";
        };
      RVector.getObjectType = function() {
        return RJSType_RVector.getIdStatic();
      };

      RVector.prototype.getObjectType = function() {
        return RJSType_RVector.getIdStatic();
      };

      RVector.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RVector.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RVector.moveList = function() 
          
        {
          //print("JS: RVector.moveList");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.moveList(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.moveList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.rotateList = function() 
          
        {
          //print("JS: RVector.rotateList");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.rotateList(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else 
  
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.rotateList(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.rotateList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.scaleList = function() 
          
        {
          //print("JS: RVector.scaleList");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.scaleList(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.scaleList(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.scaleList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.containsFuzzy = function() 
          
        {
          //print("JS: RVector.containsFuzzy");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.containsFuzzy(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.containsFuzzy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.findFirstFuzzy = function() 
          
        {
          //print("JS: RVector.findFirstFuzzy");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.findFirstFuzzy(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.findFirstFuzzy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getMinimum = function() 
          
        {
          //print("JS: RVector.getMinimum");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getMinimum(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getMinimum(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getMinimum(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getMaximum = function() 
          
        {
          //print("JS: RVector.getMaximum");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getMaximum(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getMaximum(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getMaximum(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getMinimumX = function() 
          
        {
          //print("JS: RVector.getMinimumX");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getMinimumX(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getMinimumX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getMaximumX = function() 
          
        {
          //print("JS: RVector.getMaximumX");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getMaximumX(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getMaximumX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getMinimumY = function() 
          
        {
          //print("JS: RVector.getMinimumY");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getMinimumY(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getMinimumY(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getMaximumY = function() 
          
        {
          //print("JS: RVector.getMaximumY");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getMaximumY(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getMaximumY(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getAverage = function() 
          
        {
          //print("JS: RVector.getAverage");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getAverage(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getAverage(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getAverage(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getUnion = function() 
          
        {
          //print("JS: RVector.getUnion");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getUnion(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getUnion(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getUnique = function() 
          
        {
          //print("JS: RVector.getUnique");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getUnique(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getUnique(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getXList = function() 
          
        {
          //print("JS: RVector.getXList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getXList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getXList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getYList = function() 
          
        {
          //print("JS: RVector.getYList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getYList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getYList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getZList = function() 
          
        {
          //print("JS: RVector.getZList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getZList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getZList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getCrossProduct = function() 
          
        {
          //print("JS: RVector.getCrossProduct");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getCrossProduct(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getCrossProduct(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getDotProduct = function() 
          
        {
          //print("JS: RVector.getDotProduct");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getDotProduct(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getDotProduct(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.createPolar = function() 
          
        {
          //print("JS: RVector.createPolar");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.createPolar(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.createPolar(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.lessThanX = function() 
          
        {
          //print("JS: RVector.lessThanX");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.lessThanX(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.lessThanX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.greaterThanX = function() 
          
        {
          //print("JS: RVector.greaterThanX");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.greaterThanX(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.greaterThanX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.lessThanY = function() 
          
        {
          //print("JS: RVector.lessThanY");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.lessThanY(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.lessThanY(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.greaterThanY = function() 
          
        {
          //print("JS: RVector.greaterThanY");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.greaterThanY(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.greaterThanY(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.lessThanEqualXY = function() 
          
        {
          //print("JS: RVector.lessThanEqualXY");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.lessThanEqualXY(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.lessThanEqualXY(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.greaterThanEqualXY = function() 
          
        {
          //print("JS: RVector.greaterThanEqualXY");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.greaterThanEqualXY(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.greaterThanEqualXY(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getSortedByDistance = function() 
          
        {
          //print("JS: RVector.getSortedByDistance");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getSortedByDistance(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getSortedByDistance(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getSortedLeftRightTopBottom = function() 
          
        {
          //print("JS: RVector.getSortedLeftRightTopBottom");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getSortedLeftRightTopBottom(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getSortedLeftRightTopBottom(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RVector.getSortedByAngle = function() 
          
        {
          //print("JS: RVector.getSortedByAngle");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RVector_WrapperSingletonInstance.getSortedByAngle(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RVector);
  }

  
  else {
    
        print("RVector.getSortedByAngle(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RVector.invalid = 
  RVector_WrapperSingletonInstance.invalid;
RVector.nullVector = 
  RVector_WrapperSingletonInstance.nullVector;
RVector.nanVector = 
  RVector_WrapperSingletonInstance.nanVector;


      // copy function:
      //RVector.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RVector.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    