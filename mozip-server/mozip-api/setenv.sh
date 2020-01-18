export AWS_REGION=ap-northeast-2
export PROFILE=prod
export GC_OPTIONS="-XX:+UseG1GC -XX:+DisableExplicitGC"
export JAVA_OPTS="-Dspring.profiles.active=$PROFILE $GC_OPTIONS $GC_LOG_OPTIONS"

echo "Current Profile: ${PROFILE}"

exec java $JAVA_OPTS -jar app.jar
