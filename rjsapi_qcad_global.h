#include <QtCore/QtGlobal>

#if defined(RJSAPI_QCAD_DLL)
#   if defined(RJSAPI_QCAD_LIBRARY)
#       define RJSAPI_QCAD_EXPORT Q_DECL_EXPORT
#   else
#       define RJSAPI_QCAD_EXPORT Q_DECL_IMPORT
#   endif
#else
#   define RJSAPI_QCAD_EXPORT
#endif
