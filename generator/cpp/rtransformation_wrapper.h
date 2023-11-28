
  // Auto generated
  
    #ifndef RTRANSFORMATION_H_WRAPPER
    #define RTRANSFORMATION_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RTransformation.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RTransformation
    class QCADJSAPI_EXPORT 
     RTransformation_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RTransformation_Wrapper(const RTransformation_Wrapper&);

    public:
      // initialization of RTransformation:
      static void init(RJSApi& handler);

      
        static RTransformation* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RTransformation:
          for (int i=0; i<basecasters_RTransformation.length(); i++) {
            RJSBasecaster_RTransformation* basecaster = basecasters_RTransformation[i];
            RTransformation* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RTransformation:
          if (t==RJSType_RTransformation::getIdStatic()) {
            return (RTransformation*)vp;
          }

          qWarning() << "RTransformation_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RTransformation* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RTransformation*: wrapper wraps NULL";
          }

          RTransformation* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RTransformation*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RTransformation_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RTransformation_Wrapper(RJSApi& h, RTransformation* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RTransformation_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RTransformation
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RTransformation_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    
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
          return RJSType_RTransformation::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        RTransformation* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RTransformation* getWrapped() const {
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
        RTransformation* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RTransformation*> basecasters_RTransformation;

      public:
        static void registerBasecaster_RTransformation(RJSBasecaster_RTransformation* bc) {
          basecasters_RTransformation.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RTransformation_Wrapper*)

    Q_DECLARE_INTERFACE(RTransformation_Wrapper, "org.qcad.RTransformation_Wrapper")

  
  #endif
  
