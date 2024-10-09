
      // auto generated
      //var self;

      // class constructor:
      function RPoint() {
        

        // should be RPoint_BaseJs.call(this, engine):
        //RPoint.prototype = new RPoint_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPoint.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RPoint);
            //}
          }
          else {
            qWarning("RPoint.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RPoint_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPoint);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPoint);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RPoint_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPoint);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPoint);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RPoint_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPoint);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint(): wrong number / type of arguments");
      
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

      //RPoint.prototype = new RPoint_BaseJs(engine);
      //RPoint.prototype = new RPoint_Wrapper(engine);
      RPoint.prototype = new Object();

      RPoint.prototype.toString = function() {
          //return "RPoint [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPoint [JS]";
        };
      RPoint.getObjectType = function() {
        return RJSType_RPoint.getIdStatic();
      };

      RPoint.prototype.getObjectType = function() {
        return RJSType_RPoint.getIdStatic();
      };

      RPoint.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPoint.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RPoint.Unknown = RPoint_Wrapper.Unknown;
RPoint.Point = RPoint_Wrapper.Point;
RPoint.Line = RPoint_Wrapper.Line;
RPoint.Arc = RPoint_Wrapper.Arc;
RPoint.Circle = RPoint_Wrapper.Circle;
RPoint.Ellipse = RPoint_Wrapper.Ellipse;
RPoint.Polyline = RPoint_Wrapper.Polyline;
RPoint.Spline = RPoint_Wrapper.Spline;
RPoint.Triangle = RPoint_Wrapper.Triangle;
RPoint.XLine = RPoint_Wrapper.XLine;
RPoint.Ray = RPoint_Wrapper.Ray;


      // functions:
      

      // static functions:
      

        // static function 
        RPoint.isPointShape = function() 
          
        {
          //print("JS: RPoint.isPointShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.isPointShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.isPointShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.isLineShape = function() 
          
        {
          //print("JS: RPoint.isLineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.isLineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.isLineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.isArcShape = function() 
          
        {
          //print("JS: RPoint.isArcShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.isArcShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.isArcShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.isCircleShape = function() 
          
        {
          //print("JS: RPoint.isCircleShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.isCircleShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.isCircleShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.isEllipseShape = function() 
          
        {
          //print("JS: RPoint.isEllipseShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.isEllipseShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.isEllipseShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.isFullEllipseShape = function() 
          
        {
          //print("JS: RPoint.isFullEllipseShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.isFullEllipseShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.isFullEllipseShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.isPolylineShape = function() 
          
        {
          //print("JS: RPoint.isPolylineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.isPolylineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.isPolylineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.isSplineShape = function() 
          
        {
          //print("JS: RPoint.isSplineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.isSplineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.isSplineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.isTriangleShape = function() 
          
        {
          //print("JS: RPoint.isTriangleShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.isTriangleShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.isTriangleShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.isXLineShape = function() 
          
        {
          //print("JS: RPoint.isXLineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.isXLineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.isXLineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.isRayShape = function() 
          
        {
          //print("JS: RPoint.isRayShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.isRayShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.isRayShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getPolylines = function() 
          
        {
          //print("JS: RPoint.getPolylines");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getPolylines(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getPolylines(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getOrderedShapes = function() 
          
        {
          //print("JS: RPoint.getOrderedShapes");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getOrderedShapes(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getOrderedShapes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getIntersectionPointsLL = function() 
          
        {
          //print("JS: RPoint.getIntersectionPointsLL");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsLL(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsLL(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getIntersectionPointsLL(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getIntersectionPointsLA = function() 
          
        {
          //print("JS: RPoint.getIntersectionPointsLA");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsLA(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsLA(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getIntersectionPointsLA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getIntersectionPointsLC = function() 
          
        {
          //print("JS: RPoint.getIntersectionPointsLC");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsLC(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getIntersectionPointsLC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getIntersectionPointsLE = function() 
          
        {
          //print("JS: RPoint.getIntersectionPointsLE");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsLE(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsLE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getIntersectionPointsLE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getIntersectionPointsLT = function() 
          
        {
          //print("JS: RPoint.getIntersectionPointsLT");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsLT(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsLT(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getIntersectionPointsLT(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getIntersectionPointsLS = function() 
          
        {
          //print("JS: RPoint.getIntersectionPointsLS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsLS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getIntersectionPointsLS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getIntersectionPointsLX = function() 
          
        {
          //print("JS: RPoint.getIntersectionPointsLX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsLX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getIntersectionPointsLX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getIntersectionPointsAA = function() 
          
        {
          //print("JS: RPoint.getIntersectionPointsAA");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsAA(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getIntersectionPointsAA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getIntersectionPointsAC = function() 
          
        {
          //print("JS: RPoint.getIntersectionPointsAC");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsAC(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getIntersectionPointsAC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getIntersectionPointsAE = function() 
          
        {
          //print("JS: RPoint.getIntersectionPointsAE");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsAE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getIntersectionPointsAE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getIntersectionPointsAT = function() 
          
        {
          //print("JS: RPoint.getIntersectionPointsAT");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsAT(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getIntersectionPointsAT(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getIntersectionPointsAS = function() 
          
        {
          //print("JS: RPoint.getIntersectionPointsAS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsAS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getIntersectionPointsAS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getIntersectionPointsAX = function() 
          
        {
          //print("JS: RPoint.getIntersectionPointsAX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsAX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getIntersectionPointsAX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getIntersectionPointsCC = function() 
          
        {
          //print("JS: RPoint.getIntersectionPointsCC");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsCC(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getIntersectionPointsCC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getIntersectionPointsCE = function() 
          
        {
          //print("JS: RPoint.getIntersectionPointsCE");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsCE(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getIntersectionPointsCE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getIntersectionPointsCS = function() 
          
        {
          //print("JS: RPoint.getIntersectionPointsCS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsCS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getIntersectionPointsCS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getIntersectionPointsCX = function() 
          
        {
          //print("JS: RPoint.getIntersectionPointsCX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsCX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getIntersectionPointsCX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getIntersectionPointsEE = function() 
          
        {
          //print("JS: RPoint.getIntersectionPointsEE");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsEE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else 
  
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsEE(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getIntersectionPointsEE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getIntersectionPointsES = function() 
          
        {
          //print("JS: RPoint.getIntersectionPointsES");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsES(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getIntersectionPointsES(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getIntersectionPointsEX = function() 
          
        {
          //print("JS: RPoint.getIntersectionPointsEX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsEX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getIntersectionPointsEX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getIntersectionPointsSX = function() 
          
        {
          //print("JS: RPoint.getIntersectionPointsSX");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsSX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getIntersectionPointsSX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getIntersectionPointsSS = function() 
          
        {
          //print("JS: RPoint.getIntersectionPointsSS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsSS(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getIntersectionPointsSS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getIntersectionPointsXX = function() 
          
        {
          //print("JS: RPoint.getIntersectionPointsXX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getIntersectionPointsXX(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getIntersectionPointsXX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getOffsetLines = function() 
          
        {
          //print("JS: RPoint.getOffsetLines");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getOffsetLines(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getOffsetLines(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getOffsetArcs = function() 
          
        {
          //print("JS: RPoint.getOffsetArcs");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getOffsetArcs(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getOffsetArcs(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getReversedShapeList = function() 
          
        {
          //print("JS: RPoint.getReversedShapeList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getReversedShapeList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getReversedShapeList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.trim = function() 
          
        {
          //print("JS: RPoint.trim");
          
      if (arguments.length == 6) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.trim(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.trim(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.roundCorners = function() 
          
        {
          //print("JS: RPoint.roundCorners");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.roundCorners(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.roundCorners(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.roundShapes = function() 
          
        {
          //print("JS: RPoint.roundShapes");
          
      if (arguments.length == 8) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.roundShapes(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.roundShapes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.xLineToRay = function() 
          
        {
          //print("JS: RPoint.xLineToRay");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.xLineToRay(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.xLineToRay(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.rayToLine = function() 
          
        {
          //print("JS: RPoint.rayToLine");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.rayToLine(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.rayToLine(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.scaleArc = function() 
          
        {
          //print("JS: RPoint.scaleArc");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.scaleArc(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.scaleArc(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.ellipseToArcCircleEllipse = function() 
          
        {
          //print("JS: RPoint.ellipseToArcCircleEllipse");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.ellipseToArcCircleEllipse(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.ellipseToArcCircleEllipse(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPoint.getErrorCode = function() 
          
        {
          //print("JS: RPoint.getErrorCode");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPoint_WrapperSingletonInstance.getErrorCode(
                  
                );
              

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint.getErrorCode(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPoint.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPoint.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    