
      // auto generated
      //var self;

      // class constructor:
      function RRay() {
        

        // should be RRay_BaseJs.call(this, engine):
        //RRay.prototype = new RRay_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RRay.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RRay);
            //}
          }
          else {
            qWarning("RRay.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RRay_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RRay);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRay);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RRay_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RRay);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRay);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RRay_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RRay);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRay);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RRay_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RRay);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay(): wrong number / type of arguments");
      
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

      //RRay.prototype = new RRay_BaseJs(engine);
      //RRay.prototype = new RRay_Wrapper(engine);
      RRay.prototype = new Object();

      RRay.prototype.toString = function() {
          //return "RRay [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RRay [JS]";
        };
      RRay.getObjectType = function() {
        return RJSType_RRay.getIdStatic();
      };

      RRay.prototype.getObjectType = function() {
        return RJSType_RRay.getIdStatic();
      };

      RRay.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RRay.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RXLine.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RRay.Unknown = RRay_Wrapper.Unknown;
RRay.Point = RRay_Wrapper.Point;
RRay.Line = RRay_Wrapper.Line;
RRay.Arc = RRay_Wrapper.Arc;
RRay.Circle = RRay_Wrapper.Circle;
RRay.Ellipse = RRay_Wrapper.Ellipse;
RRay.Polyline = RRay_Wrapper.Polyline;
RRay.Spline = RRay_Wrapper.Spline;
RRay.Triangle = RRay_Wrapper.Triangle;
RRay.XLine = RRay_Wrapper.XLine;
RRay.Ray = RRay_Wrapper.Ray;


      // functions:
      

      // static functions:
      

        // static function 
        RRay.isPointShape = function() 
          
        {
          //print("JS: RRay.isPointShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.isPointShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.isPointShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.isLineShape = function() 
          
        {
          //print("JS: RRay.isLineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.isLineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.isLineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.isArcShape = function() 
          
        {
          //print("JS: RRay.isArcShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.isArcShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.isArcShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.isCircleShape = function() 
          
        {
          //print("JS: RRay.isCircleShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.isCircleShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.isCircleShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.isEllipseShape = function() 
          
        {
          //print("JS: RRay.isEllipseShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.isEllipseShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.isEllipseShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.isFullEllipseShape = function() 
          
        {
          //print("JS: RRay.isFullEllipseShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.isFullEllipseShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.isFullEllipseShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.isPolylineShape = function() 
          
        {
          //print("JS: RRay.isPolylineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.isPolylineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.isPolylineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.isSplineShape = function() 
          
        {
          //print("JS: RRay.isSplineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.isSplineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.isSplineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.isTriangleShape = function() 
          
        {
          //print("JS: RRay.isTriangleShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.isTriangleShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.isTriangleShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.isXLineShape = function() 
          
        {
          //print("JS: RRay.isXLineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.isXLineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.isXLineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.isRayShape = function() 
          
        {
          //print("JS: RRay.isRayShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.isRayShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.isRayShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getOrderedShapes = function() 
          
        {
          //print("JS: RRay.getOrderedShapes");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getOrderedShapes(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getOrderedShapes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getIntersectionPointsLL = function() 
          
        {
          //print("JS: RRay.getIntersectionPointsLL");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsLL(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsLL(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getIntersectionPointsLL(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getIntersectionPointsLA = function() 
          
        {
          //print("JS: RRay.getIntersectionPointsLA");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsLA(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsLA(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getIntersectionPointsLA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getIntersectionPointsLC = function() 
          
        {
          //print("JS: RRay.getIntersectionPointsLC");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsLC(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getIntersectionPointsLC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getIntersectionPointsLE = function() 
          
        {
          //print("JS: RRay.getIntersectionPointsLE");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsLE(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsLE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getIntersectionPointsLE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getIntersectionPointsLT = function() 
          
        {
          //print("JS: RRay.getIntersectionPointsLT");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsLT(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsLT(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getIntersectionPointsLT(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getIntersectionPointsLS = function() 
          
        {
          //print("JS: RRay.getIntersectionPointsLS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsLS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getIntersectionPointsLS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getIntersectionPointsLX = function() 
          
        {
          //print("JS: RRay.getIntersectionPointsLX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsLX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getIntersectionPointsLX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getIntersectionPointsAA = function() 
          
        {
          //print("JS: RRay.getIntersectionPointsAA");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsAA(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getIntersectionPointsAA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getIntersectionPointsAC = function() 
          
        {
          //print("JS: RRay.getIntersectionPointsAC");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsAC(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getIntersectionPointsAC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getIntersectionPointsAE = function() 
          
        {
          //print("JS: RRay.getIntersectionPointsAE");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsAE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getIntersectionPointsAE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getIntersectionPointsAT = function() 
          
        {
          //print("JS: RRay.getIntersectionPointsAT");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsAT(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getIntersectionPointsAT(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getIntersectionPointsAS = function() 
          
        {
          //print("JS: RRay.getIntersectionPointsAS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsAS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getIntersectionPointsAS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getIntersectionPointsAX = function() 
          
        {
          //print("JS: RRay.getIntersectionPointsAX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsAX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getIntersectionPointsAX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getIntersectionPointsCC = function() 
          
        {
          //print("JS: RRay.getIntersectionPointsCC");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsCC(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getIntersectionPointsCC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getIntersectionPointsCE = function() 
          
        {
          //print("JS: RRay.getIntersectionPointsCE");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsCE(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getIntersectionPointsCE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getIntersectionPointsCS = function() 
          
        {
          //print("JS: RRay.getIntersectionPointsCS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsCS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getIntersectionPointsCS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getIntersectionPointsCX = function() 
          
        {
          //print("JS: RRay.getIntersectionPointsCX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsCX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getIntersectionPointsCX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getIntersectionPointsEE = function() 
          
        {
          //print("JS: RRay.getIntersectionPointsEE");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsEE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else 
  
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsEE(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getIntersectionPointsEE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getIntersectionPointsES = function() 
          
        {
          //print("JS: RRay.getIntersectionPointsES");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsES(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getIntersectionPointsES(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getIntersectionPointsEX = function() 
          
        {
          //print("JS: RRay.getIntersectionPointsEX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsEX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getIntersectionPointsEX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getIntersectionPointsSX = function() 
          
        {
          //print("JS: RRay.getIntersectionPointsSX");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsSX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getIntersectionPointsSX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getIntersectionPointsSS = function() 
          
        {
          //print("JS: RRay.getIntersectionPointsSS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsSS(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getIntersectionPointsSS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getIntersectionPointsXX = function() 
          
        {
          //print("JS: RRay.getIntersectionPointsXX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getIntersectionPointsXX(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getIntersectionPointsXX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getOffsetLines = function() 
          
        {
          //print("JS: RRay.getOffsetLines");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getOffsetLines(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getOffsetLines(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getOffsetArcs = function() 
          
        {
          //print("JS: RRay.getOffsetArcs");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getOffsetArcs(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getOffsetArcs(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getReversedShapeList = function() 
          
        {
          //print("JS: RRay.getReversedShapeList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getReversedShapeList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getReversedShapeList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.trim = function() 
          
        {
          //print("JS: RRay.trim");
          
      if (arguments.length == 6) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.trim(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.trim(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.roundCorners = function() 
          
        {
          //print("JS: RRay.roundCorners");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.roundCorners(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.roundCorners(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.roundShapes = function() 
          
        {
          //print("JS: RRay.roundShapes");
          
      if (arguments.length == 8) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.roundShapes(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.roundShapes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.xLineToRay = function() 
          
        {
          //print("JS: RRay.xLineToRay");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.xLineToRay(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.xLineToRay(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.rayToLine = function() 
          
        {
          //print("JS: RRay.rayToLine");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.rayToLine(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.rayToLine(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.scaleArc = function() 
          
        {
          //print("JS: RRay.scaleArc");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.scaleArc(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.scaleArc(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.ellipseToArcCircleEllipse = function() 
          
        {
          //print("JS: RRay.ellipseToArcCircleEllipse");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.ellipseToArcCircleEllipse(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.ellipseToArcCircleEllipse(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRay.getErrorCode = function() 
          
        {
          //print("JS: RRay.getErrorCode");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RRay_WrapperSingletonInstance.getErrorCode(
                  
                );
              

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay.getErrorCode(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RRay.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RRay.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    