
      // auto generated
      //var self;

      // class constructor:
      function RSpline() {
        

        // should be RSpline_BaseJs.call(this, engine):
        //RSpline.prototype = new RSpline_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSpline.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RSpline);
            //}
          }
          else {
            qWarning("RSpline.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RSpline_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RSpline);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSpline);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RSpline_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RSpline);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSpline);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RSpline_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RSpline);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline(): wrong number / type of arguments");
      
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

      //RSpline.prototype = new RSpline_BaseJs(engine);
      //RSpline.prototype = new RSpline_Wrapper(engine);
      RSpline.prototype = new Object();

      RSpline.prototype.toString = function() {
          //return "RSpline [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSpline [JS]";
        };
      RSpline.getObjectType = function() {
        return RJSType_RSpline.getIdStatic();
      };

      RSpline.prototype.getObjectType = function() {
        return RJSType_RSpline.getIdStatic();
      };

      RSpline.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSpline.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RExplodable.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RSpline.Unknown = RSpline_Wrapper.Unknown;
RSpline.Point = RSpline_Wrapper.Point;
RSpline.Line = RSpline_Wrapper.Line;
RSpline.Arc = RSpline_Wrapper.Arc;
RSpline.Circle = RSpline_Wrapper.Circle;
RSpline.Ellipse = RSpline_Wrapper.Ellipse;
RSpline.Polyline = RSpline_Wrapper.Polyline;
RSpline.Spline = RSpline_Wrapper.Spline;
RSpline.Triangle = RSpline_Wrapper.Triangle;
RSpline.XLine = RSpline_Wrapper.XLine;
RSpline.Ray = RSpline_Wrapper.Ray;


      // functions:
      

      // static functions:
      

        // static function 
        RSpline.isPointShape = function() 
          
        {
          //print("JS: RSpline.isPointShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.isPointShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.isPointShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.isLineShape = function() 
          
        {
          //print("JS: RSpline.isLineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.isLineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.isLineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.isArcShape = function() 
          
        {
          //print("JS: RSpline.isArcShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.isArcShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.isArcShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.isCircleShape = function() 
          
        {
          //print("JS: RSpline.isCircleShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.isCircleShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.isCircleShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.isEllipseShape = function() 
          
        {
          //print("JS: RSpline.isEllipseShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.isEllipseShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.isEllipseShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.isFullEllipseShape = function() 
          
        {
          //print("JS: RSpline.isFullEllipseShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.isFullEllipseShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.isFullEllipseShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.isPolylineShape = function() 
          
        {
          //print("JS: RSpline.isPolylineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.isPolylineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.isPolylineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.isSplineShape = function() 
          
        {
          //print("JS: RSpline.isSplineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.isSplineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.isSplineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.isTriangleShape = function() 
          
        {
          //print("JS: RSpline.isTriangleShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.isTriangleShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.isTriangleShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.isXLineShape = function() 
          
        {
          //print("JS: RSpline.isXLineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.isXLineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.isXLineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.isRayShape = function() 
          
        {
          //print("JS: RSpline.isRayShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.isRayShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.isRayShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getPolylines = function() 
          
        {
          //print("JS: RSpline.getPolylines");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getPolylines(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getPolylines(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getOrderedShapes = function() 
          
        {
          //print("JS: RSpline.getOrderedShapes");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getOrderedShapes(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getOrderedShapes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getIntersectionPointsLL = function() 
          
        {
          //print("JS: RSpline.getIntersectionPointsLL");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsLL(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsLL(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getIntersectionPointsLL(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getIntersectionPointsLA = function() 
          
        {
          //print("JS: RSpline.getIntersectionPointsLA");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsLA(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsLA(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getIntersectionPointsLA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getIntersectionPointsLC = function() 
          
        {
          //print("JS: RSpline.getIntersectionPointsLC");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsLC(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getIntersectionPointsLC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getIntersectionPointsLE = function() 
          
        {
          //print("JS: RSpline.getIntersectionPointsLE");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsLE(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsLE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getIntersectionPointsLE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getIntersectionPointsLT = function() 
          
        {
          //print("JS: RSpline.getIntersectionPointsLT");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsLT(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsLT(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getIntersectionPointsLT(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getIntersectionPointsLS = function() 
          
        {
          //print("JS: RSpline.getIntersectionPointsLS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsLS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getIntersectionPointsLS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getIntersectionPointsLX = function() 
          
        {
          //print("JS: RSpline.getIntersectionPointsLX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsLX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getIntersectionPointsLX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getIntersectionPointsAA = function() 
          
        {
          //print("JS: RSpline.getIntersectionPointsAA");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsAA(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getIntersectionPointsAA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getIntersectionPointsAC = function() 
          
        {
          //print("JS: RSpline.getIntersectionPointsAC");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsAC(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getIntersectionPointsAC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getIntersectionPointsAE = function() 
          
        {
          //print("JS: RSpline.getIntersectionPointsAE");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsAE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getIntersectionPointsAE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getIntersectionPointsAT = function() 
          
        {
          //print("JS: RSpline.getIntersectionPointsAT");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsAT(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getIntersectionPointsAT(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getIntersectionPointsAS = function() 
          
        {
          //print("JS: RSpline.getIntersectionPointsAS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsAS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getIntersectionPointsAS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getIntersectionPointsAX = function() 
          
        {
          //print("JS: RSpline.getIntersectionPointsAX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsAX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getIntersectionPointsAX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getIntersectionPointsCC = function() 
          
        {
          //print("JS: RSpline.getIntersectionPointsCC");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsCC(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getIntersectionPointsCC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getIntersectionPointsCE = function() 
          
        {
          //print("JS: RSpline.getIntersectionPointsCE");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsCE(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getIntersectionPointsCE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getIntersectionPointsCS = function() 
          
        {
          //print("JS: RSpline.getIntersectionPointsCS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsCS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getIntersectionPointsCS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getIntersectionPointsCX = function() 
          
        {
          //print("JS: RSpline.getIntersectionPointsCX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsCX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getIntersectionPointsCX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getIntersectionPointsEE = function() 
          
        {
          //print("JS: RSpline.getIntersectionPointsEE");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsEE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else 
  
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsEE(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getIntersectionPointsEE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getIntersectionPointsES = function() 
          
        {
          //print("JS: RSpline.getIntersectionPointsES");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsES(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getIntersectionPointsES(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getIntersectionPointsEX = function() 
          
        {
          //print("JS: RSpline.getIntersectionPointsEX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsEX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getIntersectionPointsEX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getIntersectionPointsSX = function() 
          
        {
          //print("JS: RSpline.getIntersectionPointsSX");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsSX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getIntersectionPointsSX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getIntersectionPointsSS = function() 
          
        {
          //print("JS: RSpline.getIntersectionPointsSS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsSS(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getIntersectionPointsSS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getIntersectionPointsXX = function() 
          
        {
          //print("JS: RSpline.getIntersectionPointsXX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getIntersectionPointsXX(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getIntersectionPointsXX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getOffsetLines = function() 
          
        {
          //print("JS: RSpline.getOffsetLines");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getOffsetLines(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getOffsetLines(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getOffsetArcs = function() 
          
        {
          //print("JS: RSpline.getOffsetArcs");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getOffsetArcs(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getOffsetArcs(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getReversedShapeList = function() 
          
        {
          //print("JS: RSpline.getReversedShapeList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getReversedShapeList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getReversedShapeList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.trim = function() 
          
        {
          //print("JS: RSpline.trim");
          
      if (arguments.length == 6) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.trim(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.trim(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.roundCorners = function() 
          
        {
          //print("JS: RSpline.roundCorners");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.roundCorners(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.roundCorners(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.roundShapes = function() 
          
        {
          //print("JS: RSpline.roundShapes");
          
      if (arguments.length == 8) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.roundShapes(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.roundShapes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.xLineToRay = function() 
          
        {
          //print("JS: RSpline.xLineToRay");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.xLineToRay(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.xLineToRay(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.rayToLine = function() 
          
        {
          //print("JS: RSpline.rayToLine");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.rayToLine(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.rayToLine(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.scaleArc = function() 
          
        {
          //print("JS: RSpline.scaleArc");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.scaleArc(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.scaleArc(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.ellipseToArcCircleEllipse = function() 
          
        {
          //print("JS: RSpline.ellipseToArcCircleEllipse");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.ellipseToArcCircleEllipse(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.ellipseToArcCircleEllipse(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.getErrorCode = function() 
          
        {
          //print("JS: RSpline.getErrorCode");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.getErrorCode(
                  
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.getErrorCode(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.createSplinesFromArc = function() 
          
        {
          //print("JS: RSpline.createSplinesFromArc");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.createSplinesFromArc(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.createSplinesFromArc(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.createBezierFromSmallArc = function() 
          
        {
          //print("JS: RSpline.createBezierFromSmallArc");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.createBezierFromSmallArc(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.createBezierFromSmallArc(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.hasProxy = function() 
          
        {
          //print("JS: RSpline.hasProxy");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.hasProxy(
                  
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.hasProxy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSpline.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSpline.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    