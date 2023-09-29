
  // Automatically generated, do not edit
  
        #ifndef RJSTYPE_QCAD_H
        #define RJSTYPE_QCAD_H
      

    #include <QObject>
    #include <QQmlEngine>

    #include "RJSTypeEnum.h"

    

  
      class RJSType_RMouseCoordinateListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RMouseCoordinateListener::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RMouseCoordinateListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMouseCoordinateListener();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RMouseCoordinateListener());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    

  

  
      class RJSType_REntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_REntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "REntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_REntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_REntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RShape : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RShape::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RShape";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RShape();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RShape());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RArc : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RArc::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RArc";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RArc();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RArc());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RCircle : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RCircle::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RCircle";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RCircle();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RCircle());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_REllipse : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_REllipse::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "REllipse";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_REllipse();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_REllipse());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RLine : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RLine::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RLine";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLine();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RLine());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPoint : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPoint::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPoint";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPoint();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPoint());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RRay : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RRay::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RRay";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RRay();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RRay());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSpline : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSpline::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSpline";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSpline();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSpline());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RTriangle : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RTriangle::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RTriangle";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTriangle();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RTriangle());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RXLine : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RXLine::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RXLine";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RXLine();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RXLine());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RTextLabel : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RTextLabel::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RTextLabel";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTextLabel();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RTextLabel());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    

  
      class RJSType_RObject : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RObject::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RObject";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RObject();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RObject());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RArcEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RArcEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RArcEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RArcEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RArcEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RAttributeDefinitionEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RAttributeDefinitionEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RAttributeDefinitionEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RAttributeDefinitionEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RAttributeDefinitionEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RAttributeEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RAttributeEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RAttributeEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RAttributeEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RAttributeEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RBlock : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RBlock::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RBlock";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RBlock();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RBlock());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RBlockReferenceEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RBlockReferenceEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RBlockReferenceEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RBlockReferenceEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RBlockReferenceEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RCircleEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RCircleEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RCircleEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RCircleEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RCircleEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDimAlignedEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDimAlignedEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDimAlignedEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimAlignedEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDimAlignedEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDimAngular2LEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDimAngular2LEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDimAngular2LEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimAngular2LEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDimAngular2LEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDimAngular3PEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDimAngular3PEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDimAngular3PEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimAngular3PEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDimAngular3PEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDimAngularData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDimAngularData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDimAngularData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimAngularData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDimAngularData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDimAngularEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDimAngularEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDimAngularEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimAngularEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDimAngularEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDimArcLengthEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDimArcLengthEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDimArcLengthEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimArcLengthEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDimArcLengthEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDimDiametricEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDimDiametricEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDimDiametricEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimDiametricEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDimDiametricEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDimLinearEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDimLinearEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDimLinearEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimLinearEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDimLinearEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDimOrdinateEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDimOrdinateEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDimOrdinateEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimOrdinateEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDimOrdinateEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDimRadialEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDimRadialEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDimRadialEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimRadialEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDimRadialEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDimRotatedEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDimRotatedEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDimRotatedEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimRotatedEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDimRotatedEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDimStyle : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDimStyle::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDimStyle";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimStyle();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDimStyle());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDimensionEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDimensionEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDimensionEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimensionEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDimensionEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDocumentVariables : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDocumentVariables::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDocumentVariables";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDocumentVariables();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDocumentVariables());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_REllipseEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_REllipseEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "REllipseEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_REllipseEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_REllipseEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RFaceEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RFaceEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RFaceEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFaceEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RFaceEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RHatchEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RHatchEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RHatchEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RHatchEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RHatchEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RImageEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RImageEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RImageEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RImageEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RImageEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RLayer : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RLayer::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RLayer";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLayer();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RLayer());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RLayerState : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RLayerState::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RLayerState";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLayerState();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RLayerState());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RLayout : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RLayout::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RLayout";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLayout();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RLayout());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RLeaderEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RLeaderEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RLeaderEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLeaderEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RLeaderEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RLineEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RLineEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RLineEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLineEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RLineEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RLinetype : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RLinetype::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RLinetype";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLinetype();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RLinetype());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPointEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPointEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPointEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPointEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPointEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPolyline : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPolyline::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPolyline";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPolyline();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPolyline());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPolylineEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPolylineEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPolylineEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPolylineEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPolylineEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RRayEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RRayEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RRayEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RRayEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RRayEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSolidEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSolidEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSolidEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSolidEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSolidEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSplineEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSplineEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSplineEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSplineEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSplineEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RTextEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RTextEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RTextEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTextEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RTextEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RTextBasedEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RTextBasedEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RTextBasedEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTextBasedEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RTextBasedEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RToleranceEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RToleranceEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RToleranceEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RToleranceEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RToleranceEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RTraceEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RTraceEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RTraceEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTraceEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RTraceEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RUcs : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RUcs::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RUcs";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RUcs();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RUcs());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RView : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RView::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RView";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RView();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RView());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RViewportEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RViewportEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RViewportEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RViewportEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RViewportEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RXLineEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RXLineEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RXLineEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RXLineEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RXLineEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    

  
      class RJSType_RArcData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RArcData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RArcData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RArcData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RArcData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RAttributeData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RAttributeData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RAttributeData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RAttributeData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RAttributeData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RAttributeDefinitionData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RAttributeDefinitionData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RAttributeDefinitionData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RAttributeDefinitionData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RAttributeDefinitionData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RAutoLoadJs : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RAutoLoadJs::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RAutoLoadJs";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RAutoLoadJs();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RAutoLoadJs());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RBlockReferenceData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RBlockReferenceData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RBlockReferenceData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RBlockReferenceData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RBlockReferenceData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RBox : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RBox::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RBox";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RBox();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RBox());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RCircleData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RCircleData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RCircleData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RCircleData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RCircleData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RColor : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RColor::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RColor";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RColor();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RColor());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDebug : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDebug::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDebug";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDebug();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDebug());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDimAlignedData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDimAlignedData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDimAlignedData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimAlignedData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDimAlignedData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDimAngular2LData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDimAngular2LData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDimAngular2LData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimAngular2LData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDimAngular2LData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDimAngular3PData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDimAngular3PData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDimAngular3PData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimAngular3PData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDimAngular3PData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDimArcLengthData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDimArcLengthData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDimArcLengthData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimArcLengthData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDimArcLengthData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDimDiametricData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDimDiametricData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDimDiametricData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimDiametricData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDimDiametricData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDimOrdinateData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDimOrdinateData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDimOrdinateData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimOrdinateData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDimOrdinateData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDimRadialData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDimRadialData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDimRadialData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimRadialData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDimRadialData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDimRotatedData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDimRotatedData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDimRotatedData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimRotatedData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDimRotatedData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDimStyleData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDimStyleData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDimStyleData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimStyleData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDimStyleData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDxfServices : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDxfServices::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDxfServices";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDxfServices();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDxfServices());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_REllipseData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_REllipseData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "REllipseData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_REllipseData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_REllipseData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RFaceData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RFaceData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RFaceData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFaceData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RFaceData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RFileCache : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RFileCache::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RFileCache";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFileCache();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RFileCache());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RFileExporterAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RFileExporterAdapter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RFileExporterAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFileExporterAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RFileExporterAdapter());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RFileExporterFactoryAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RFileExporterFactoryAdapter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RFileExporterFactoryAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFileExporterFactoryAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RFileExporterFactoryAdapter());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RFileExporterRegistry : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RFileExporterRegistry::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RFileExporterRegistry";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFileExporterRegistry();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RFileExporterRegistry());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RFileImporterAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RFileImporterAdapter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RFileImporterAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFileImporterAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RFileImporterAdapter());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RFileImporterFactoryAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RFileImporterFactoryAdapter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RFileImporterFactoryAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFileImporterFactoryAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RFileImporterFactoryAdapter());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RFileImporterRegistry : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RFileImporterRegistry::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RFileImporterRegistry";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFileImporterRegistry();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RFileImporterRegistry());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RFont : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RFont::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RFont";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFont();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RFont());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RFontList : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RFontList::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RFontList";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFontList();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RFontList());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RGraphicsSceneDrawable : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RGraphicsSceneDrawable::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RGraphicsSceneDrawable";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RGraphicsSceneDrawable();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RGraphicsSceneDrawable());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RHatchData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RHatchData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RHatchData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RHatchData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RHatchData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RImageData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RImageData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RImageData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RImageData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RImageData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RLeaderData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RLeaderData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RLeaderData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLeaderData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RLeaderData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RLineData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RLineData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RLineData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLineData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RLineData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RLinetypePattern : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RLinetypePattern::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RLinetypePattern";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLinetypePattern();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RLinetypePattern());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RLineweight : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RLineweight::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RLineweight";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLineweight();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RLineweight());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RMath : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RMath::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RMath";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMath();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RMath());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RMatrix : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RMatrix::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RMatrix";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMatrix();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RMatrix());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPainterPath : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPainterPath::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPainterPath";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPainterPath();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPainterPath());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPattern : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPattern::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPattern";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPattern();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPattern());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPatternLine : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPatternLine::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPatternLine";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPatternLine();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPatternLine());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPatternList : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPatternList::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPatternList";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPatternList();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPatternList());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPatternListImperial : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPatternListImperial::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPatternListImperial";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPatternListImperial();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPatternListImperial());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPatternListMetric : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPatternListMetric::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPatternListMetric";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPatternListMetric();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPatternListMetric());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPluginInfo : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPluginInfo::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPluginInfo";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPluginInfo();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPluginInfo());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPluginLoader : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPluginLoader::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPluginLoader";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPluginLoader();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPluginLoader());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPointData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPointData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPointData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPointData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPointData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPolylineData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPolylineData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPolylineData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPolylineData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPolylineData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPropertyAttributes : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPropertyAttributes::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPropertyAttributes";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPropertyAttributes();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPropertyAttributes());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPropertyChange : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPropertyChange::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPropertyChange";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPropertyChange();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPropertyChange());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPropertyEditor : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPropertyEditor::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPropertyEditor";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPropertyEditor();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPropertyEditor());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPropertyTypeId : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPropertyTypeId::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPropertyTypeId";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPropertyTypeId();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPropertyTypeId());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RRayData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RRayData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RRayData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RRayData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RRayData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RRefPoint : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RRefPoint::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RRefPoint";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RRefPoint();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RRefPoint());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RS : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RS::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RS";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RS();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RS());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSettings : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSettings::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSettings";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSettings();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSettings());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSolidData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSolidData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSolidData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSolidData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSolidData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSpatialIndexNavel : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSpatialIndexNavel::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSpatialIndexNavel";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSpatialIndexNavel();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSpatialIndexNavel());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSpatialIndexVisitorAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSpatialIndexVisitorAdapter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSpatialIndexVisitorAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSpatialIndexVisitorAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSpatialIndexVisitorAdapter());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSplineData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSplineData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSplineData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSplineData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSplineData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RTextBasedData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RTextBasedData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RTextBasedData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTextBasedData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RTextBasedData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RTextData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RTextData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RTextData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTextData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RTextData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RTextLayout : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RTextLayout::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RTextLayout";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTextLayout();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RTextLayout());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RToleranceData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RToleranceData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RToleranceData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RToleranceData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RToleranceData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RTraceData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RTraceData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RTraceData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTraceData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RTraceData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RTransaction : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RTransaction::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RTransaction";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTransaction();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RTransaction());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RTransform : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RTransform::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RTransform";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTransform();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RTransform());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RTransformOp : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RTransformOp::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RTransformOp";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTransformOp();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RTransformOp());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RUnit : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RUnit::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RUnit";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RUnit();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RUnit());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RViewFocusListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RViewFocusListenerAdapter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RViewFocusListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RViewFocusListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RViewFocusListenerAdapter());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RViewportData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RViewportData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RViewportData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RViewportData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RViewportData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RXLineData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RXLineData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RXLineData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RXLineData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RXLineData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RVector : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RVector::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RVector";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RVector();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RVector());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    

  
      class RJSType_RPainterPathSource : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPainterPathSource::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPainterPathSource";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPainterPathSource();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPainterPathSource());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RAction : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RAction::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RAction";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RAction();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RAction());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RActionAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RActionAdapter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RActionAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RActionAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RActionAdapter());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RAddObjectOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RAddObjectOperation::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RAddObjectOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RAddObjectOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RAddObjectOperation());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RAddObjectsOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RAddObjectsOperation::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RAddObjectsOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RAddObjectsOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RAddObjectsOperation());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RBlockListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RBlockListener::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RBlockListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RBlockListener();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RBlockListener());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RChangePropertyOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RChangePropertyOperation::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RChangePropertyOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RChangePropertyOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RChangePropertyOperation());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RClickReferencePointOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RClickReferencePointOperation::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RClickReferencePointOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RClickReferencePointOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RClickReferencePointOperation());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RClipboardOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RClipboardOperation::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RClipboardOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RClipboardOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RClipboardOperation());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RCloseCurrentEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RCloseCurrentEvent::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RCloseCurrentEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RCloseCurrentEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RCloseCurrentEvent());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RCommandEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RCommandEvent::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RCommandEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RCommandEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RCommandEvent());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RCoordinateEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RCoordinateEvent::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RCoordinateEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RCoordinateEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RCoordinateEvent());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RCoordinateListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RCoordinateListener::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RCoordinateListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RCoordinateListener();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RCoordinateListener());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RCopyOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RCopyOperation::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RCopyOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RCopyOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RCopyOperation());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDeleteAllEntitiesOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDeleteAllEntitiesOperation::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDeleteAllEntitiesOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDeleteAllEntitiesOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDeleteAllEntitiesOperation());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDeleteObjectOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDeleteObjectOperation::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDeleteObjectOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDeleteObjectOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDeleteObjectOperation());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDeleteObjectsOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDeleteObjectsOperation::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDeleteObjectsOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDeleteObjectsOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDeleteObjectsOperation());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDeleteSelectionOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDeleteSelectionOperation::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDeleteSelectionOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDeleteSelectionOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDeleteSelectionOperation());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDimensionData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDimensionData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDimensionData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimensionData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDimensionData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDimLinearData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDimLinearData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDimLinearData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDimLinearData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDimLinearData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDirected : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDirected::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDirected";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDirected();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDirected());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDocument : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDocument::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDocument";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDocument();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDocument());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDocumentInterface : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDocumentInterface::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDocumentInterface";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDocumentInterface();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDocumentInterface());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_REntityData : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_REntityData::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "REntityData";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_REntityData();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_REntityData());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_REntityExportListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_REntityExportListener::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "REntityExportListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_REntityExportListener();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_REntityExportListener());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_REntityPickEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_REntityPickEvent::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "REntityPickEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_REntityPickEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_REntityPickEvent());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RExplodable : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RExplodable::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RExplodable";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RExplodable();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RExplodable());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RExportListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RExportListener::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RExportListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RExportListener();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RExportListener());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RExporter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RExporter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RExporter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RExporter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RExporter());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RFileExporter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RFileExporter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RFileExporter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFileExporter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RFileExporter());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RFileExporterFactory : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RFileExporterFactory::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RFileExporterFactory";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFileExporterFactory();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RFileExporterFactory());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RFileImporter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RFileImporter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RFileImporter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFileImporter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RFileImporter());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RFileImporterFactory : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RFileImporterFactory::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RFileImporterFactory";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFileImporterFactory();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RFileImporterFactory());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RFocusListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RFocusListener::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RFocusListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFocusListener();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RFocusListener());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RGraphicsScene : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RGraphicsScene::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RGraphicsScene";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RGraphicsScene();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RGraphicsScene());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RGraphicsSceneQt : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RGraphicsSceneQt::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RGraphicsSceneQt";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RGraphicsSceneQt();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RGraphicsSceneQt());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RGraphicsView : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RGraphicsView::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RGraphicsView";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RGraphicsView();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RGraphicsView());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RGrid : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RGrid::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RGrid";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RGrid();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RGrid());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RImportListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RImportListener::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RImportListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RImportListener();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RImportListener());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RImporter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RImporter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RImporter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RImporter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RImporter());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RInputEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RInputEvent::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RInputEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RInputEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RInputEvent());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RInterTransactionListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RInterTransactionListener::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RInterTransactionListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RInterTransactionListener();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RInterTransactionListener());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RKeyListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RKeyListener::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RKeyListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RKeyListener();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RKeyListener());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RLayerListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RLayerListener::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RLayerListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLayerListener();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RLayerListener());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RMainWindow : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RMainWindow::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RMainWindow";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMainWindow();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RMainWindow());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RMemoryStorage : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RMemoryStorage::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RMemoryStorage";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMemoryStorage();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RMemoryStorage());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RMessageHandler : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RMessageHandler::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RMessageHandler";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMessageHandler();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RMessageHandler());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RMixedOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RMixedOperation::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RMixedOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMixedOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RMixedOperation());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RModifiedListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RModifiedListener::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RModifiedListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RModifiedListener();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RModifiedListener());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RModifyObjectOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RModifyObjectOperation::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RModifyObjectOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RModifyObjectOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RModifyObjectOperation());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RModifyObjectsOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RModifyObjectsOperation::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RModifyObjectsOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RModifyObjectsOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RModifyObjectsOperation());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RMouseEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RMouseEvent::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RMouseEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMouseEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RMouseEvent());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RMoveReferencePointOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RMoveReferencePointOperation::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RMoveReferencePointOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMoveReferencePointOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RMoveReferencePointOperation());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RMoveSelectionOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RMoveSelectionOperation::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RMoveSelectionOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMoveSelectionOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RMoveSelectionOperation());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RNewDocumentListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RNewDocumentListener::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RNewDocumentListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RNewDocumentListener();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RNewDocumentListener());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_ROperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_ROperation::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "ROperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_ROperation();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_ROperation());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_ROperationUtils : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_ROperationUtils::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "ROperationUtils";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_ROperationUtils();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_ROperationUtils());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_ROrthoGrid : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_ROrthoGrid::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "ROrthoGrid";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_ROrthoGrid();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_ROrthoGrid());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPaletteListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPaletteListener::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPaletteListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPaletteListener();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPaletteListener());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPasteOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPasteOperation::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPasteOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPasteOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPasteOperation());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPenListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPenListener::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPenListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPenListener();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPenListener());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPluginInterface : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPluginInterface::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPluginInterface";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPluginInterface();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPluginInterface());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPreferencesListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPreferencesListener::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPreferencesListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPreferencesListener();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPreferencesListener());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RProgressHandler : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RProgressHandler::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RProgressHandler";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RProgressHandler();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RProgressHandler());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPropertyEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPropertyEvent::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPropertyEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPropertyEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPropertyEvent());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPropertyListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPropertyListener::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPropertyListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPropertyListener();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPropertyListener());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RRestrictAngleLength : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RRestrictAngleLength::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RRestrictAngleLength";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RRestrictAngleLength();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RRestrictAngleLength());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RRestrictHorizontal : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RRestrictHorizontal::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RRestrictHorizontal";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RRestrictHorizontal();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RRestrictHorizontal());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RRestrictOff : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RRestrictOff::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RRestrictOff";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RRestrictOff();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RRestrictOff());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RRestrictOrthogonal : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RRestrictOrthogonal::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RRestrictOrthogonal";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RRestrictOrthogonal();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RRestrictOrthogonal());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RRestrictVertical : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RRestrictVertical::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RRestrictVertical";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RRestrictVertical();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RRestrictVertical());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RRuler : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RRuler::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RRuler";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RRuler();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RRuler());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RScaleSelectionOperation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RScaleSelectionOperation::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RScaleSelectionOperation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RScaleSelectionOperation();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RScaleSelectionOperation());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSelectionListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSelectionListener::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSelectionListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSelectionListener();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSelectionListener());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSnap : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSnap::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSnap";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnap();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSnap());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSnapAuto : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSnapAuto::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSnapAuto";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapAuto();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSnapAuto());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSnapCenter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSnapCenter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSnapCenter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapCenter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSnapCenter());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSnapDistance : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSnapDistance::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSnapDistance";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapDistance();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSnapDistance());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSnapEnd : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSnapEnd::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSnapEnd";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapEnd();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSnapEnd());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSnapEntityBase : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSnapEntityBase::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSnapEntityBase";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapEntityBase();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSnapEntityBase());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSnapFree : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSnapFree::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSnapFree";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapFree();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSnapFree());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSnapGrid : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSnapGrid::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSnapGrid";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapGrid();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSnapGrid());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSnapIntersection : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSnapIntersection::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSnapIntersection";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapIntersection();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSnapIntersection());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSnapListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSnapListener::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSnapListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapListener();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSnapListener());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSnapMiddle : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSnapMiddle::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSnapMiddle";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapMiddle();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSnapMiddle());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSnapOnEntity : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSnapOnEntity::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSnapOnEntity";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapOnEntity();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSnapOnEntity());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSnapPerpendicular : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSnapPerpendicular::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSnapPerpendicular";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapPerpendicular();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSnapPerpendicular());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSnapReference : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSnapReference::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSnapReference";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapReference();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSnapReference());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSnapRestriction : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSnapRestriction::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSnapRestriction";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapRestriction();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSnapRestriction());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSnapTangential : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSnapTangential::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSnapTangential";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSnapTangential();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSnapTangential());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSpatialIndex : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSpatialIndex::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSpatialIndex";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSpatialIndex();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSpatialIndex());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSpatialIndexSimple : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSpatialIndexSimple::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSpatialIndexSimple";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSpatialIndexSimple();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSpatialIndexSimple());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSpatialIndexVisitor : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSpatialIndexVisitor::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSpatialIndexVisitor";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSpatialIndexVisitor();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSpatialIndexVisitor());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RStorage : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RStorage::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RStorage";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RStorage();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RStorage());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RTabletEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RTabletEvent::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RTabletEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTabletEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RTabletEvent());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RTerminateEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RTerminateEvent::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RTerminateEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTerminateEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RTerminateEvent());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RTextRenderer : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RTextRenderer::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RTextRenderer";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTextRenderer();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RTextRenderer());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RTransactionListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RTransactionListener::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RTransactionListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTransactionListener();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RTransactionListener());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RTransactionStack : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RTransactionStack::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RTransactionStack";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTransactionStack();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RTransactionStack());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RTransformation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RTransformation::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RTransformation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTransformation();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RTransformation());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RTranslation : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RTranslation::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RTranslation";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTranslation();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RTranslation());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RUcsListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RUcsListener::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RUcsListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RUcsListener();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RUcsListener());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RViewFocusListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RViewFocusListener::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RViewFocusListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RViewFocusListener();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RViewFocusListener());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RViewListener : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RViewListener::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RViewListener";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RViewListener();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RViewListener());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RWheelEvent : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RWheelEvent::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RWheelEvent";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RWheelEvent();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RWheelEvent());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    

  
      class RJSType_RBlockListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RBlockListenerAdapter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RBlockListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RBlockListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RBlockListenerAdapter());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RCadToolBar : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RCadToolBar::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RCadToolBar";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RCadToolBar();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RCadToolBar());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RCadToolBarPanel : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RCadToolBarPanel::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RCadToolBarPanel";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RCadToolBarPanel();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RCadToolBarPanel());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RCharacterWidget : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RCharacterWidget::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RCharacterWidget";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RCharacterWidget();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RCharacterWidget());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RColorCombo : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RColorCombo::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RColorCombo";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RColorCombo();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RColorCombo());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RCommandLine : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RCommandLine::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RCommandLine";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RCommandLine();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RCommandLine());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RCoordinateListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RCoordinateListenerAdapter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RCoordinateListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RCoordinateListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RCoordinateListenerAdapter());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RDockWidget : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RDockWidget::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RDockWidget";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RDockWidget();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RDockWidget());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_REventFilter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_REventFilter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "REventFilter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_REventFilter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_REventFilter());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_REventHandler : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_REventHandler::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "REventHandler";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_REventHandler();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_REventHandler());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RFileSystemModel : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RFileSystemModel::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RFileSystemModel";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFileSystemModel();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RFileSystemModel());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RFlowLayout : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RFlowLayout::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RFlowLayout";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFlowLayout();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RFlowLayout());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RFocusListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RFocusListenerAdapter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RFocusListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFocusListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RFocusListenerAdapter());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RFontChooserWidget : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RFontChooserWidget::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RFontChooserWidget";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RFontChooserWidget();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RFontChooserWidget());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RGraphicsViewQt : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RGraphicsViewQt::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RGraphicsViewQt";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RGraphicsViewQt();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RGraphicsViewQt());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RGraphicsViewImage : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RGraphicsViewImage::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RGraphicsViewImage";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RGraphicsViewImage();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RGraphicsViewImage());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RGuiAction : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RGuiAction::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RGuiAction";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RGuiAction();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RGuiAction());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RInterTransactionListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RInterTransactionListenerAdapter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RInterTransactionListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RInterTransactionListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RInterTransactionListenerAdapter());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RKeyListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RKeyListenerAdapter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RKeyListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RKeyListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RKeyListenerAdapter());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RLayerListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RLayerListenerAdapter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RLayerListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLayerListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RLayerListenerAdapter());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RLinetypeCombo : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RLinetypeCombo::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RLinetypeCombo";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLinetypeCombo();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RLinetypeCombo());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RLineweightCombo : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RLineweightCombo::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RLineweightCombo";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RLineweightCombo();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RLineweightCombo());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RListView : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RListView::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RListView";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RListView();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RListView());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RListWidget : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RListWidget::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RListWidget";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RListWidget();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RListWidget());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RMainWindowQt : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RMainWindowQt::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RMainWindowQt";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMainWindowQt();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RMainWindowQt());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RMathComboBox : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RMathComboBox::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RMathComboBox";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMathComboBox();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RMathComboBox());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RMathLineEdit : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RMathLineEdit::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RMathLineEdit";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMathLineEdit();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RMathLineEdit());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RMdiArea : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RMdiArea::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RMdiArea";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMdiArea();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RMdiArea());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RMdiChildQt : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RMdiChildQt::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RMdiChildQt";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RMdiChildQt();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RMdiChildQt());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPaletteListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPaletteListenerAdapter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPaletteListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPaletteListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPaletteListenerAdapter());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPenListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPenListenerAdapter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPenListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPenListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPenListenerAdapter());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPreferencesListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPreferencesListenerAdapter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPreferencesListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPreferencesListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPreferencesListenerAdapter());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RPropertyListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RPropertyListenerAdapter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RPropertyListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RPropertyListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RPropertyListenerAdapter());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RRulerQt : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RRulerQt::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RRulerQt";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RRulerQt();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RRulerQt());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSelectionListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSelectionListenerAdapter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSelectionListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSelectionListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSelectionListenerAdapter());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RSingleApplication : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RSingleApplication::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RSingleApplication";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RSingleApplication();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RSingleApplication());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RTextEdit : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RTextEdit::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RTextEdit";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTextEdit();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RTextEdit());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RToolButton : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RToolButton::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RToolButton";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RToolButton();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RToolButton());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RToolMatrixItemDelegate : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RToolMatrixItemDelegate::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RToolMatrixItemDelegate";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RToolMatrixItemDelegate();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RToolMatrixItemDelegate());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RTransactionListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RTransactionListenerAdapter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RTransactionListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTransactionListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RTransactionListenerAdapter());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RTreeWidget : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RTreeWidget::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RTreeWidget";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RTreeWidget();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RTreeWidget());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RViewListenerAdapter : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RViewListenerAdapter::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RViewListenerAdapter";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RViewListenerAdapter();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RViewListenerAdapter());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    
      class RJSType_RWidget : public RJSTypeEnum {
          Q_OBJECT
          QML_INTERFACE

          Q_PROPERTY(int id READ getIdStatic)

      public:
          Q_INVOKABLE
          int getId() const {
              return RJSType_RWidget::getIdStatic();
          }

          Q_INVOKABLE
          QString getName() const {
              return "RWidget";
          }

          //RJSTypeEnum* create() {
          //    return new RJSType_RWidget();
          //}

          Q_INVOKABLE
          static int getIdStatic() {
              if (id<0) {
                  id = RJSTypeEnum::reserve(new RJSType_RWidget());
              }
              return id;
          }

          
            // return true if the given type is derived from type
            // e.g. RJSType_RShape::isOfType(RJSType_RLine::getIdStatic()) returns true since RLine is derived from RShape:
            Q_INVOKABLE
            static bool isOfType(int otherType);
          

      private:
          static int id;
      };
    

  

  

  

  

  

  

  

  


    #endif
  