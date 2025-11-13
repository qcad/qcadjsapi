
  // Automatically generated, do not edit
  
        #ifndef RJSTYPE_QCAD_H
        #define RJSTYPE_QCAD_H
      
        #include "qcadjsapi_global.h"
      

    #include <QObject>
    #include <QQmlEngine>

    #include "RJSTypeEnum.h"

    

  
      class QCADJSAPI_EXPORT 
      RJSType_RMouseCoordinateListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RMouseCoordinateListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMouseCoordinateListener();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    

  

  
      class QCADJSAPI_EXPORT 
      RJSType_REntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "REntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_REntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RShape : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RShape";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RShape();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RArc : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RArc";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RArc();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RCircle : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RCircle";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RCircle();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_REllipse : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "REllipse";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_REllipse();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RLine : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RLine";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLine();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPoint : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPoint";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPoint();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RRay : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RRay";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RRay();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSpline : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSpline";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSpline();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RTriangle : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RTriangle";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTriangle();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RXLine : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RXLine";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RXLine();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RTextLabel : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RTextLabel";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTextLabel();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    

  
      class QCADJSAPI_EXPORT 
      RJSType_RObject : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RObject";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RObject();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RArcEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RArcEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RArcEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RAttributeDefinitionEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RAttributeDefinitionEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RAttributeDefinitionEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RAttributeEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RAttributeEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RAttributeEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RBlock : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RBlock";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RBlock();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RBlockReferenceEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RBlockReferenceEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RBlockReferenceEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RCircleEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RCircleEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RCircleEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDimAlignedEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDimAlignedEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimAlignedEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDimAngular2LEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDimAngular2LEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimAngular2LEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDimAngular3PEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDimAngular3PEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimAngular3PEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDimAngularData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDimAngularData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimAngularData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDimAngularEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDimAngularEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimAngularEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDimArcLengthEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDimArcLengthEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimArcLengthEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDimDiametricEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDimDiametricEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimDiametricEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDimLinearEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDimLinearEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimLinearEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDimOrdinateEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDimOrdinateEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimOrdinateEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDimRadialEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDimRadialEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimRadialEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDimRotatedEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDimRotatedEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimRotatedEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDimStyle : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDimStyle";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimStyle();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDimensionEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDimensionEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimensionEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDocumentVariables : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDocumentVariables";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDocumentVariables();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_REllipseEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "REllipseEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_REllipseEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RFaceEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RFaceEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFaceEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RHatchEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RHatchEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RHatchEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RImageEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RImageEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RImageEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RLayer : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RLayer";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLayer();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RLayerState : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RLayerState";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLayerState();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RLayout : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RLayout";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLayout();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RLeaderEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RLeaderEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLeaderEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RLineEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RLineEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLineEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RLinetype : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RLinetype";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLinetype();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPointEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPointEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPointEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPolyline : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPolyline";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPolyline();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPolylineEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPolylineEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPolylineEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RRayEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RRayEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RRayEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSolidEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSolidEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSolidEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSplineEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSplineEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSplineEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RTextEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RTextEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTextEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RTextBasedEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RTextBasedEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTextBasedEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RToleranceEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RToleranceEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RToleranceEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RTraceEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RTraceEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTraceEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RUcs : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RUcs";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RUcs();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RView : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RView";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RView();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RViewportEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RViewportEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RViewportEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RWipeoutEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RWipeoutEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RWipeoutEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RXLineEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RXLineEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RXLineEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    

  
      class QCADJSAPI_EXPORT 
      RJSType_RArcData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RArcData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RArcData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RAttributeData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RAttributeData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RAttributeData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RAttributeDefinitionData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RAttributeDefinitionData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RAttributeDefinitionData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RAutoLoadJs : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RAutoLoadJs";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RAutoLoadJs();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RBlockReferenceData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RBlockReferenceData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RBlockReferenceData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RBox : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RBox";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RBox();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RCircleData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RCircleData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RCircleData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RColor : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RColor";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RColor();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDebug : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDebug";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDebug();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDimAlignedData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDimAlignedData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimAlignedData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDimAngular2LData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDimAngular2LData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimAngular2LData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDimAngular3PData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDimAngular3PData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimAngular3PData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDimArcLengthData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDimArcLengthData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimArcLengthData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDimDiametricData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDimDiametricData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimDiametricData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDimOrdinateData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDimOrdinateData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimOrdinateData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDimRadialData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDimRadialData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimRadialData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDimRotatedData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDimRotatedData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimRotatedData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDimStyleData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDimStyleData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimStyleData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDxfServices : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDxfServices";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDxfServices();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_REllipseData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "REllipseData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_REllipseData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RFaceData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RFaceData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFaceData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RFileCache : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RFileCache";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFileCache();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RFileExporterAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RFileExporterAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFileExporterAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RFileExporterFactoryAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RFileExporterFactoryAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFileExporterFactoryAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RFileExporterRegistry : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RFileExporterRegistry";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFileExporterRegistry();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RFileImporterAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RFileImporterAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFileImporterAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RFileImporterFactoryAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RFileImporterFactoryAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFileImporterFactoryAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RFileImporterRegistry : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RFileImporterRegistry";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFileImporterRegistry();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RFont : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RFont";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFont();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RFontList : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RFontList";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFontList();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RGraphicsSceneDrawable : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RGraphicsSceneDrawable";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RGraphicsSceneDrawable();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RHatchData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RHatchData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RHatchData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RImageData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RImageData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RImageData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RLeaderData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RLeaderData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLeaderData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RLineData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RLineData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLineData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RLinetypePattern : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RLinetypePattern";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLinetypePattern();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RLineweight : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RLineweight";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLineweight();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RMath : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RMath";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMath();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RMatrix : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RMatrix";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMatrix();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPainterPath : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPainterPath";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPainterPath();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPattern : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPattern";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPattern();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPatternLine : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPatternLine";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPatternLine();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPatternList : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPatternList";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPatternList();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPatternListImperial : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPatternListImperial";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPatternListImperial();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPatternListMetric : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPatternListMetric";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPatternListMetric();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPluginInfo : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPluginInfo";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPluginInfo();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPluginLoader : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPluginLoader";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPluginLoader();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPointData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPointData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPointData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPolylineData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPolylineData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPolylineData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPropertyAttributes : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPropertyAttributes";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPropertyAttributes();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPropertyChange : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPropertyChange";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPropertyChange();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPropertyTypeId : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPropertyTypeId";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPropertyTypeId();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RRayData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RRayData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RRayData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RRefPoint : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RRefPoint";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RRefPoint();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RS : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RS";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RS();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSettings : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSettings";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSettings();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSolidData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSolidData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSolidData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSpatialIndexNavel : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSpatialIndexNavel";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSpatialIndexNavel();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSpatialIndexVisitorAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSpatialIndexVisitorAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSpatialIndexVisitorAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSplineData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSplineData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSplineData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RStemmer : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RStemmer";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RStemmer();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RTextBasedData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RTextBasedData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTextBasedData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RTextData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RTextData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTextData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RTextLayout : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RTextLayout";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTextLayout();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RToleranceData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RToleranceData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RToleranceData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RTraceData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RTraceData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTraceData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RTransaction : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RTransaction";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTransaction();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RTransform : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RTransform";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTransform();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RTransformOp : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RTransformOp";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTransformOp();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RUnit : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RUnit";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RUnit();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RViewFocusListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RViewFocusListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RViewFocusListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RViewportData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RViewportData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RViewportData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RWipeoutData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RWipeoutData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RWipeoutData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RXLineData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RXLineData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RXLineData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RVector : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RVector";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RVector();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    

  
      class QCADJSAPI_EXPORT 
      RJSType_RPainterPathSource : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPainterPathSource";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPainterPathSource();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RAction : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RAction";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RAction();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RActionAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RActionAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RActionAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RAddObjectOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RAddObjectOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RAddObjectOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RAddObjectsOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RAddObjectsOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RAddObjectsOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RBlockListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RBlockListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RBlockListener();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RChangePropertyOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RChangePropertyOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RChangePropertyOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RClickReferencePointOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RClickReferencePointOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RClickReferencePointOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RClipboardOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RClipboardOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RClipboardOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RCloseCurrentEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RCloseCurrentEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RCloseCurrentEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RCommandEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RCommandEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RCommandEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RCoordinateEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RCoordinateEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RCoordinateEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RCoordinateListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RCoordinateListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RCoordinateListener();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RCopyOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RCopyOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RCopyOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDeleteAllEntitiesOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDeleteAllEntitiesOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDeleteAllEntitiesOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDeleteObjectOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDeleteObjectOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDeleteObjectOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDeleteObjectsOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDeleteObjectsOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDeleteObjectsOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDeleteSelectionOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDeleteSelectionOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDeleteSelectionOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDimensionData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDimensionData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimensionData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDimLinearData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDimLinearData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimLinearData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDirected : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDirected";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDirected();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDocument : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDocument";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDocument();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDocumentInterface : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDocumentInterface";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDocumentInterface();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_REntityData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "REntityData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_REntityData();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_REntityExportListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "REntityExportListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_REntityExportListener();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_REntityPickEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "REntityPickEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_REntityPickEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RExplodable : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RExplodable";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RExplodable();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RExportListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RExportListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RExportListener();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RExporter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RExporter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RExporter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RFileExporter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RFileExporter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFileExporter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RFileExporterFactory : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RFileExporterFactory";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFileExporterFactory();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RFileImporter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RFileImporter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFileImporter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RFileImporterFactory : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RFileImporterFactory";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFileImporterFactory();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RFocusListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RFocusListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFocusListener();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RGraphicsScene : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RGraphicsScene";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RGraphicsScene();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RGraphicsSceneQt : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RGraphicsSceneQt";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RGraphicsSceneQt();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RGraphicsView : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RGraphicsView";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RGraphicsView();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RGrid : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RGrid";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RGrid();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RImportListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RImportListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RImportListener();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RImporter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RImporter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RImporter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RInputEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RInputEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RInputEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RInterTransactionListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RInterTransactionListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RInterTransactionListener();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RKeyListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RKeyListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RKeyListener();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RLayerListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RLayerListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLayerListener();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RMainWindow : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RMainWindow";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMainWindow();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RMemoryStorage : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RMemoryStorage";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMemoryStorage();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RMessageHandler : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RMessageHandler";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMessageHandler();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RMixedOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RMixedOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMixedOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RModifiedListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RModifiedListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RModifiedListener();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RModifyObjectOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RModifyObjectOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RModifyObjectOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RModifyObjectsOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RModifyObjectsOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RModifyObjectsOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RMouseEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RMouseEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMouseEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RMoveReferencePointOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RMoveReferencePointOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMoveReferencePointOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RMoveSelectionOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RMoveSelectionOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMoveSelectionOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RMultiOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RMultiOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMultiOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RNewDocumentListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RNewDocumentListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RNewDocumentListener();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_ROperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "ROperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_ROperation();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_ROperationUtils : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "ROperationUtils";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_ROperationUtils();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_ROrthoGrid : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "ROrthoGrid";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_ROrthoGrid();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPaletteListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPaletteListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPaletteListener();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPasteOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPasteOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPasteOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPenListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPenListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPenListener();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPluginInterface : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPluginInterface";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPluginInterface();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPreferencesListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPreferencesListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPreferencesListener();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RProgressHandler : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RProgressHandler";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RProgressHandler();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPropertyEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPropertyEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPropertyEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPropertyListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPropertyListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPropertyListener();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RRestrictAngleLength : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RRestrictAngleLength";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RRestrictAngleLength();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RRestrictHorizontal : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RRestrictHorizontal";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RRestrictHorizontal();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RRestrictOff : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RRestrictOff";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RRestrictOff();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RRestrictOrthogonal : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RRestrictOrthogonal";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RRestrictOrthogonal();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RRestrictVertical : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RRestrictVertical";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RRestrictVertical();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RRuler : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RRuler";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RRuler();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RScaleSelectionOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RScaleSelectionOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RScaleSelectionOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSelectionListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSelectionListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSelectionListener();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSnap : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSnap";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnap();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSnapAuto : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSnapAuto";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapAuto();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSnapCenter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSnapCenter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapCenter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSnapDistance : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSnapDistance";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapDistance();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSnapEnd : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSnapEnd";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapEnd();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSnapEntityBase : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSnapEntityBase";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapEntityBase();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSnapFree : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSnapFree";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapFree();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSnapGrid : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSnapGrid";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapGrid();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSnapIntersection : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSnapIntersection";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapIntersection();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSnapListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSnapListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapListener();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSnapMiddle : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSnapMiddle";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapMiddle();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSnapOnEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSnapOnEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapOnEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSnapPerpendicular : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSnapPerpendicular";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapPerpendicular();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSnapReference : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSnapReference";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapReference();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSnapRestriction : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSnapRestriction";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapRestriction();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSnapTangential : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSnapTangential";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapTangential();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSpatialIndex : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSpatialIndex";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSpatialIndex();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSpatialIndexSimple : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSpatialIndexSimple";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSpatialIndexSimple();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSpatialIndexVisitor : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSpatialIndexVisitor";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSpatialIndexVisitor();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RStorage : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RStorage";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RStorage();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RTabletEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RTabletEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTabletEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RTerminateEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RTerminateEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTerminateEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RTextRenderer : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RTextRenderer";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTextRenderer();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RTransactionListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RTransactionListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTransactionListener();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RTransactionStack : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RTransactionStack";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTransactionStack();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RTransformation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RTransformation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTransformation();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RTranslation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RTranslation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTranslation();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RUcsListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RUcsListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RUcsListener();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RViewFocusListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RViewFocusListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RViewFocusListener();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RViewListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RViewListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RViewListener();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RWheelEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RWheelEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RWheelEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    

  
      class QCADJSAPI_EXPORT 
      RJSType_RBlockListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RBlockListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RBlockListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RCadToolBar : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RCadToolBar";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RCadToolBar();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RCadToolBarPanel : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RCadToolBarPanel";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RCadToolBarPanel();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RCharacterWidget : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RCharacterWidget";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RCharacterWidget();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RColorCombo : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RColorCombo";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RColorCombo();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RComboBox : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RComboBox";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RComboBox();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RCommandLine : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RCommandLine";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RCommandLine();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RCoordinateListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RCoordinateListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RCoordinateListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RDockWidget : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RDockWidget";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDockWidget();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_REventFilter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "REventFilter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_REventFilter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RExportListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RExportListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RExportListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RToolOptionEventFilter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RToolOptionEventFilter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RToolOptionEventFilter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_REventHandler : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "REventHandler";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_REventHandler();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RFileSystemModel : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RFileSystemModel";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFileSystemModel();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RFlowLayout : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RFlowLayout";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFlowLayout();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RFocusListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RFocusListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFocusListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RFontChooserWidget : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RFontChooserWidget";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFontChooserWidget();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RGraphicsViewQt : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RGraphicsViewQt";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RGraphicsViewQt();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RGraphicsViewImage : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RGraphicsViewImage";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RGraphicsViewImage();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RGraphicsViewWorker : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RGraphicsViewWorker";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RGraphicsViewWorker();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RGuiAction : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RGuiAction";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RGuiAction();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RImportListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RImportListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RImportListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RInterTransactionListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RInterTransactionListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RInterTransactionListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RKeyListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RKeyListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RKeyListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RLayerListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RLayerListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLayerListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RLinetypeCombo : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RLinetypeCombo";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLinetypeCombo();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RLineweightCombo : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RLineweightCombo";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLineweightCombo();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RListView : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RListView";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RListView();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RListWidget : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RListWidget";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RListWidget();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RMainWindowQt : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RMainWindowQt";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMainWindowQt();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RMathComboBox : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RMathComboBox";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMathComboBox();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RMathLineEdit : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RMathLineEdit";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMathLineEdit();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RMdiArea : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RMdiArea";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMdiArea();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RMdiChildQt : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RMdiChildQt";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMdiChildQt();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPaletteListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPaletteListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPaletteListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPenListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPenListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPenListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPreferencesListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPreferencesListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPreferencesListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPropertyEditor : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPropertyEditor";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPropertyEditor();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RPropertyListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RPropertyListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPropertyListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RRulerQt : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RRulerQt";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RRulerQt();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSelectionListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSelectionListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSelectionListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RSingleApplication : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RSingleApplication";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSingleApplication();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RTextEdit : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RTextEdit";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTextEdit();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RToolButton : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RToolButton";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RToolButton();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RToolMatrixItemDelegate : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RToolMatrixItemDelegate";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RToolMatrixItemDelegate();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RTransactionListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RTransactionListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTransactionListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RTreeWidget : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RTreeWidget";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTreeWidget();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RViewListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RViewListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RViewListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class QCADJSAPI_EXPORT 
      RJSType_RWidget : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const;

          Q_INVOKABLE
          QString getName() const {
              return "RWidget";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RWidget();
          //}

          Q_INVOKABLE
          static int getIdStatic();

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    

  

  

  

  

  

  

  

  


    #endif
  