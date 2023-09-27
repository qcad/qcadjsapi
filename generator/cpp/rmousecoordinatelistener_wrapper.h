
  // Auto generated
  
    #ifndef RMOUSECOORDINATELISTENER_H_WRAPPER
    #define RMOUSECOORDINATELISTENER_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RVector.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RMouseCoordinateListener.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RMouseCoordinateListener
    class RMouseCoordinateListener_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RMouseCoordinateListener_Wrapper(const RMouseCoordinateListener_Wrapper&);

    public:
      // initialization of RMouseCoordinateListener:
      static void init(RJSApi& handler);

      
        static RMouseCoordinateListener* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_RMouseCoordinateListener.length(); i++) {
            RJSBasecaster_RMouseCoordinateListener* basecaster = basecasters_RMouseCoordinateListener[i];
            RMouseCoordinateListener* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_RMouseCoordinateListener::getIdStatic()) {
            return (RMouseCoordinateListener*)vp;
          }

          qWarning() << "RMouseCoordinateListener_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RMouseCoordinateListener* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RMouseCoordinateListener*: wrapper wraps NULL";
          }

          RMouseCoordinateListener* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RMouseCoordinateListener*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RMouseCoordinateListener_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RMouseCoordinateListener_Wrapper(RJSApi& h, RMouseCoordinateListener* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RMouseCoordinateListener_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: RMouseCoordinateListener
    // Function: setCoordinate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCoordinate
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
          }
        

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
          return RJSType_RMouseCoordinateListener::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RMouseCoordinateListener* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RMouseCoordinateListener* getWrapped() const {
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
        RMouseCoordinateListener* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RMouseCoordinateListener*> basecasters_RMouseCoordinateListener;

      public:
        static void registerBasecaster_RMouseCoordinateListener(RJSBasecaster_RMouseCoordinateListener* bc) {
          basecasters_RMouseCoordinateListener.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RMouseCoordinateListener_Wrapper*)

    Q_DECLARE_INTERFACE(RMouseCoordinateListener_Wrapper, "org.qcad.RMouseCoordinateListener_Wrapper")

  
  #endif
  
