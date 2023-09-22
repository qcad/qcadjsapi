
  // Automatically generated, do not edit
  
        #ifndef RJSTYPE_QCAD_H
        #define RJSTYPE_QCAD_H
      

    #include <QObject>
    #include <QQmlEngine>

    #include "RJSTypeEnum.h"

    

  

  

  

  
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


      private:
          static int id;
      };
    

  

  

  

  

  

  

  

  

  


    #endif
  