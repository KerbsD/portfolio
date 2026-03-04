import WindowControl from "@/components/WindowControl";
import WindowWrapper from "@/components/WindowWrapper";
import useWindowStore from "@/store/windows";

function Text() {
  const { windows } = useWindowStore();

  const data = windows.txtfile.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControl target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 space-y-6 bg-white">
        {image && (
          <div className="w-full">
            <img src={image} alt={name} className="w-full h-auto rounded" />
          </div>
        )}

        {subtitle && (
          <h3 className="text-lg font-semibold text-gray-800">{subtitle}</h3>
        )}

        {Array.isArray(description) && description.length > 0 && (
            <div className="space-y-2">
                {description.map((item, index) => (
                    <p key={index} className="text-gray-600">{item}</p>
                ))}
            </div>
        )}
      </div>
    </>
  );
}

export default WindowWrapper(Text, "txtfile");
