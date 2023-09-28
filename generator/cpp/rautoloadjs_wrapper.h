
  // Auto generated
  
    #ifndef RAUTOLOADJS_H_WRAPPER
    #define RAUTOLOADJS_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RAutoLoadJs.h"
      
      // singleton class wrapper for static functions:
      class RAutoLoadJs_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      RAutoLoadJs_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: RAutoLoadJs
    // Function: addAutoLoadFile
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addAutoLoadFile
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RAutoLoadJs
    // Function: getAutoLoadFiles
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getAutoLoadFiles
              (

                
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static RAutoLoadJs_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RAutoLoadJs
    class RAutoLoadJs_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RAutoLoadJs_Wrapper(const RAutoLoadJs_Wrapper&);

    public:
      // initialization of RAutoLoadJs:
      static void init(RJSApi& handler);

      
        static RAutoLoadJs* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RAutoLoadJs:
          for (int i=0; i<basecasters_RAutoLoadJs.length(); i++) {
            RJSBasecaster_RAutoLoadJs* basecaster = basecasters_RAutoLoadJs[i];
            RAutoLoadJs* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RAutoLoadJs:
          if (t==RJSType_RAutoLoadJs::getIdStatic()) {
            return (RAutoLoadJs*)vp;
          }

          qWarning() << "RAutoLoadJs_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RAutoLoadJs* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RAutoLoadJs*: wrapper wraps NULL";
          }

          RAutoLoadJs* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RAutoLoadJs*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RAutoLoadJs_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RAutoLoadJs_Wrapper(RJSApi& h, RAutoLoadJs* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RAutoLoadJs_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RAutoLoadJs
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RAutoLoadJs_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_RAutoLoadJs::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        RAutoLoadJs* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RAutoLoadJs* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        RAutoLoadJs* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RAutoLoadJs*> basecasters_RAutoLoadJs;

      public:
        static void registerBasecaster_RAutoLoadJs(RJSBasecaster_RAutoLoadJs* bc) {
          basecasters_RAutoLoadJs.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RAutoLoadJs_Wrapper*)

    Q_DECLARE_INTERFACE(RAutoLoadJs_Wrapper, "org.qcad.RAutoLoadJs_Wrapper")

  
  #endif
  
