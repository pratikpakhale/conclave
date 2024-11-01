// types.ts

// ReviewCard.tsx
import { cn } from "@/lib/utils";
import { Review } from "@/types/Home";
import Image from "next/image";
import Link from "next/link";

interface ReviewCardProps extends Review {
  onClick?: () => void;
}

export const ReviewCard = ({
  _id,
  name,
  graduationYear,
  testimonial,
  designation,
  photoUrl,
  // onClick,
}: ReviewCardProps) => {
  return (
    <Link
      href={`/testimonial/${_id}`}
      // onClick={onClick}
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-8px border w-full p-4",
        "border-gray-950/[.1] bg-[#0d1013] hover:bg-[#14181d]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          src={photoUrl || "https://avatar.vercel.sh/default"}
          className="w-8 h-8 rounded-full object-cover"
          height={32}
          width={32}
          alt={name}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-400 text-left">
            {designation}{" "}
            <span className="text-white/40 pl-4">Batch - {graduationYear}</span>
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm w-full text-left text-white">
        {testimonial}
      </blockquote>
    </Link>
  );
};

// // ReviewDialog.tsx
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
// } from "@/components/ui/dialog";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Review } from "@/types/Home";
// //   import Image from "next/image";

// interface ReviewDialogProps {
//   review: Review | null;
//   isOpen: boolean;
//   onClose: () => void;
// }

// export const ReviewDialog = ({
//   review,
//   isOpen,
//   onClose,
// }: ReviewDialogProps) => {
//   if (!review) return null;

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="sm:max-w-[425px] rounded-12px">
//         <DialogHeader>
//           <div className="flex flex-row items-center gap-2">
//             <Image
//               src={review.photoUrl || "https://avatar.vercel.sh/default"}
//               className="w-8 h-8 rounded-full object-cover"
//               height={32}
//               width={32}
//               alt={review?.name}
//             />
//             <div className="flex flex-col">
//               <figcaption className="text-sm text-left font-medium text-white">
//                 {review?.name}
//               </figcaption>
//               <p className="text-xs font-medium text-gray-400 text-left">
//                 {review?.designation}{" "}
//                 <span className="text-white/40 pl-4">
//                   Batch - {review?.graduationYear}
//                 </span>
//               </p>
//             </div>
//           </div>
//         </DialogHeader>
//         <DialogDescription>
//           {review.course && (
//             <span className="">
//               <strong>Course</strong> - {review?.course}
//             </span>
//           )}
//           <Accordion type="single" collapsible>
//             {review.achievements && (
//               <AccordionItem value="achievements">
//                 <AccordionTrigger>
//                   <strong>Achievements</strong>
//                 </AccordionTrigger>
//                 <AccordionContent>
//                   <p>{review.achievements}</p>
//                 </AccordionContent>
//               </AccordionItem>
//             )}
//             {review.memorableExperience && (
//               <AccordionItem value="experience">
//                 <AccordionTrigger>
//                   <strong>Memorable Experience</strong>
//                 </AccordionTrigger>
//                 <AccordionContent>
//                   <p>{review.memorableExperience}</p>
//                 </AccordionContent>
//               </AccordionItem>
//             )}
//             {review.encouragement && (
//               <AccordionItem value="encouragement">
//                 <AccordionTrigger>
//                   <strong>Encouragement</strong>
//                 </AccordionTrigger>
//                 <AccordionContent>
//                   <p>{review.encouragement}</p>
//                 </AccordionContent>
//               </AccordionItem>
//             )}
//             {review.testimonial && (
//               <AccordionItem value="testimonial">
//                 <AccordionTrigger>
//                   <strong>Testimonial</strong>
//                 </AccordionTrigger>
//                 <AccordionContent>
//                   <blockquote className="mt-4 text-sm italic text-white">
//                     {review.testimonial}
//                   </blockquote>
//                 </AccordionContent>
//               </AccordionItem>
//             )}
//           </Accordion>
//         </DialogDescription>
//       </DialogContent>
//     </Dialog>
//   );
// };
