
  // Auto generated
  
    #ifndef RPAINTERPATHSOURCE_H_WRAPPER
    #define RPAINTERPATHSOURCE_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RPainterPathSource.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RPainterPathSource
    class RPainterPathSource_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RPainterPathSource_Wrapper(const RPainterPathSource_Wrapper&);

    public:
      // initialization of RPainterPathSource:
      static void init(RJSApi& handler);

      
        static RPainterPathSource* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_RPainterPathSource.length(); i++) {
            RJSBasecaster_RPainterPathSource* basecaster = basecasters_RPainterPathSource[i];
            RPainterPathSource* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_RPainterPathSource::getIdStatic()) {
            return (RPainterPathSource*)vp;
          }

          qWarning() << "RPainterPathSource_Wrapper::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static RPainterPathSource* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RPainterPathSource*: wrapper wraps NULL";
          }

          RPainterPathSource* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RPainterPathSource*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RPainterPathSource_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RPainterPathSource_Wrapper(RJSApi& h, RPainterPathSource* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RPainterPathSource_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

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
          return RJSType_RPainterPathSource::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RPainterPathSource* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RPainterPathSource* getWrapped() const {
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
        RPainterPathSource* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RPainterPathSource*> basecasters_RPainterPathSource;

      public:
        static void registerBasecaster_RPainterPathSource(RJSBasecaster_RPainterPathSource* bc) {
          basecasters_RPainterPathSource.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RPainterPathSource_Wrapper*)

    Q_DECLARE_INTERFACE(RPainterPathSource_Wrapper, "org.qcad.RPainterPathSource_Wrapper")

  
  #endif
  
