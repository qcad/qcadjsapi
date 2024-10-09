
      // auto generated
      //var self;

      // class constructor:
      function RPolyline() {
        

        // should be RPolyline_BaseJs.call(this, engine):
        //RPolyline.prototype = new RPolyline_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPolyline.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RPolyline);
            //}
          }
          else {
            qWarning("RPolyline.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RPolyline_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPolyline);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RPolyline_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPolyline);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RPolyline_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPolyline);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline(): wrong number / type of arguments");
      
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

      //RPolyline.prototype = new RPolyline_BaseJs(engine);
      //RPolyline.prototype = new RPolyline_Wrapper(engine);
      RPolyline.prototype = new Object();

      RPolyline.prototype.toString = function() {
          //return "RPolyline [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPolyline [JS]";
        };
      RPolyline.getObjectType = function() {
        return RJSType_RPolyline.getIdStatic();
      };

      RPolyline.prototype.getObjectType = function() {
        return RJSType_RPolyline.getIdStatic();
      };

      RPolyline.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPolyline.getIdStatic()) {
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
RPolyline.Unknown = RPolyline_Wrapper.Unknown;
RPolyline.Point = RPolyline_Wrapper.Point;
RPolyline.Line = RPolyline_Wrapper.Line;
RPolyline.Arc = RPolyline_Wrapper.Arc;
RPolyline.Circle = RPolyline_Wrapper.Circle;
RPolyline.Ellipse = RPolyline_Wrapper.Ellipse;
RPolyline.Polyline = RPolyline_Wrapper.Polyline;
RPolyline.Spline = RPolyline_Wrapper.Spline;
RPolyline.Triangle = RPolyline_Wrapper.Triangle;
RPolyline.XLine = RPolyline_Wrapper.XLine;
RPolyline.Ray = RPolyline_Wrapper.Ray;


      // functions:
      

      // static functions:
      

        // static function 
        RPolyline.isPointShape = function() 
          
        {
          //print("JS: RPolyline.isPointShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.isPointShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.isPointShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.isLineShape = function() 
          
        {
          //print("JS: RPolyline.isLineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.isLineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.isLineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.isArcShape = function() 
          
        {
          //print("JS: RPolyline.isArcShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.isArcShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.isArcShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.isCircleShape = function() 
          
        {
          //print("JS: RPolyline.isCircleShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.isCircleShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.isCircleShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.isEllipseShape = function() 
          
        {
          //print("JS: RPolyline.isEllipseShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.isEllipseShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.isEllipseShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.isFullEllipseShape = function() 
          
        {
          //print("JS: RPolyline.isFullEllipseShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.isFullEllipseShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.isFullEllipseShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.isPolylineShape = function() 
          
        {
          //print("JS: RPolyline.isPolylineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.isPolylineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.isPolylineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.isSplineShape = function() 
          
        {
          //print("JS: RPolyline.isSplineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.isSplineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.isSplineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.isTriangleShape = function() 
          
        {
          //print("JS: RPolyline.isTriangleShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.isTriangleShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.isTriangleShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.isXLineShape = function() 
          
        {
          //print("JS: RPolyline.isXLineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.isXLineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.isXLineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.isRayShape = function() 
          
        {
          //print("JS: RPolyline.isRayShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.isRayShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.isRayShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getOrderedShapes = function() 
          
        {
          //print("JS: RPolyline.getOrderedShapes");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getOrderedShapes(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getOrderedShapes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getIntersectionPointsLL = function() 
          
        {
          //print("JS: RPolyline.getIntersectionPointsLL");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsLL(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsLL(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getIntersectionPointsLL(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getIntersectionPointsLA = function() 
          
        {
          //print("JS: RPolyline.getIntersectionPointsLA");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsLA(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsLA(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getIntersectionPointsLA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getIntersectionPointsLC = function() 
          
        {
          //print("JS: RPolyline.getIntersectionPointsLC");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsLC(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getIntersectionPointsLC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getIntersectionPointsLE = function() 
          
        {
          //print("JS: RPolyline.getIntersectionPointsLE");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsLE(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsLE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getIntersectionPointsLE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getIntersectionPointsLT = function() 
          
        {
          //print("JS: RPolyline.getIntersectionPointsLT");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsLT(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsLT(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getIntersectionPointsLT(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getIntersectionPointsLS = function() 
          
        {
          //print("JS: RPolyline.getIntersectionPointsLS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsLS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getIntersectionPointsLS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getIntersectionPointsLX = function() 
          
        {
          //print("JS: RPolyline.getIntersectionPointsLX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsLX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getIntersectionPointsLX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getIntersectionPointsAA = function() 
          
        {
          //print("JS: RPolyline.getIntersectionPointsAA");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsAA(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getIntersectionPointsAA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getIntersectionPointsAC = function() 
          
        {
          //print("JS: RPolyline.getIntersectionPointsAC");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsAC(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getIntersectionPointsAC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getIntersectionPointsAE = function() 
          
        {
          //print("JS: RPolyline.getIntersectionPointsAE");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsAE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getIntersectionPointsAE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getIntersectionPointsAT = function() 
          
        {
          //print("JS: RPolyline.getIntersectionPointsAT");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsAT(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getIntersectionPointsAT(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getIntersectionPointsAS = function() 
          
        {
          //print("JS: RPolyline.getIntersectionPointsAS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsAS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getIntersectionPointsAS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getIntersectionPointsAX = function() 
          
        {
          //print("JS: RPolyline.getIntersectionPointsAX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsAX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getIntersectionPointsAX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getIntersectionPointsCC = function() 
          
        {
          //print("JS: RPolyline.getIntersectionPointsCC");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsCC(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getIntersectionPointsCC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getIntersectionPointsCE = function() 
          
        {
          //print("JS: RPolyline.getIntersectionPointsCE");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsCE(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getIntersectionPointsCE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getIntersectionPointsCS = function() 
          
        {
          //print("JS: RPolyline.getIntersectionPointsCS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsCS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getIntersectionPointsCS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getIntersectionPointsCX = function() 
          
        {
          //print("JS: RPolyline.getIntersectionPointsCX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsCX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getIntersectionPointsCX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getIntersectionPointsEE = function() 
          
        {
          //print("JS: RPolyline.getIntersectionPointsEE");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsEE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else 
  
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsEE(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getIntersectionPointsEE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getIntersectionPointsES = function() 
          
        {
          //print("JS: RPolyline.getIntersectionPointsES");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsES(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getIntersectionPointsES(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getIntersectionPointsEX = function() 
          
        {
          //print("JS: RPolyline.getIntersectionPointsEX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsEX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getIntersectionPointsEX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getIntersectionPointsSX = function() 
          
        {
          //print("JS: RPolyline.getIntersectionPointsSX");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsSX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getIntersectionPointsSX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getIntersectionPointsSS = function() 
          
        {
          //print("JS: RPolyline.getIntersectionPointsSS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsSS(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getIntersectionPointsSS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getIntersectionPointsXX = function() 
          
        {
          //print("JS: RPolyline.getIntersectionPointsXX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getIntersectionPointsXX(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getIntersectionPointsXX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getOffsetLines = function() 
          
        {
          //print("JS: RPolyline.getOffsetLines");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getOffsetLines(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getOffsetLines(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getOffsetArcs = function() 
          
        {
          //print("JS: RPolyline.getOffsetArcs");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getOffsetArcs(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getOffsetArcs(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getReversedShapeList = function() 
          
        {
          //print("JS: RPolyline.getReversedShapeList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getReversedShapeList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getReversedShapeList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.trim = function() 
          
        {
          //print("JS: RPolyline.trim");
          
      if (arguments.length == 6) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.trim(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.trim(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.roundCorners = function() 
          
        {
          //print("JS: RPolyline.roundCorners");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.roundCorners(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.roundCorners(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.roundShapes = function() 
          
        {
          //print("JS: RPolyline.roundShapes");
          
      if (arguments.length == 8) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.roundShapes(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.roundShapes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.xLineToRay = function() 
          
        {
          //print("JS: RPolyline.xLineToRay");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.xLineToRay(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.xLineToRay(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.rayToLine = function() 
          
        {
          //print("JS: RPolyline.rayToLine");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.rayToLine(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.rayToLine(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.scaleArc = function() 
          
        {
          //print("JS: RPolyline.scaleArc");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.scaleArc(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.scaleArc(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.ellipseToArcCircleEllipse = function() 
          
        {
          //print("JS: RPolyline.ellipseToArcCircleEllipse");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.ellipseToArcCircleEllipse(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.ellipseToArcCircleEllipse(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getErrorCode = function() 
          
        {
          //print("JS: RPolyline.getErrorCode");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getErrorCode(
                  
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getErrorCode(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.getPolylines = function() 
          
        {
          //print("JS: RPolyline.getPolylines");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.getPolylines(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.getPolylines(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.isStraight = function() 
          
        {
          //print("JS: RPolyline.isStraight");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.isStraight(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.isStraight(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.hasProxy = function() 
          
        {
          //print("JS: RPolyline.hasProxy");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.hasProxy(
                  
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.hasProxy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPolyline.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPolyline.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    